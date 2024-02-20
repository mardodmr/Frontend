import { getMyProducts } from "api/products";
import NavbarComponent from "components/NavbarComponent";
import { useAuth } from "context/auth-context";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";

const KEYS_TO_RENDER = ["name", "description", "price", "date"];

function MyProducts() {
  const [products, setProducts] = useState([]);
  const { setCurrentProductId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      const data = await getMyProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="product-card">
      <NavbarComponent />
      {products?.map((product) => {
        return (
          <div key={product._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.productImg} />
              <ListGroup className="list-group-flush">
                {Object.keys(product).map((key) => {
                  if (!KEYS_TO_RENDER.includes(key)) {
                    return null;
                  }
                  return (
                    <React.Fragment key={key}>
                      <ListGroup.Item>
                        {key}: {JSON.stringify(product[key])}
                        <br />
                      </ListGroup.Item>
                    </React.Fragment>
                  );
                })}
              </ListGroup>
              <Link to="/update-product" state={product._id}>
                <Button variant="primary" style={{ margin: 10 }}>
                  Edit
                </Button>
              </Link>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default MyProducts;
