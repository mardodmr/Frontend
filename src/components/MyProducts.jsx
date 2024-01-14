import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { getMyProducts } from "api/products";
import NavbarComponent from "components/NavbarComponent";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

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
              <Button
                variant="primary"
                style={{ margin: 10 }}
                onClick={() => {
                  setCurrentProductId(product._id);
                  navigate("/update-product");
                }}
              >
                edit
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default MyProducts;
