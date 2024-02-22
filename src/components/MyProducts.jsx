import React from "react";
import { Link } from "react-router-dom";
import useData from "api/hooks/useData";
import DefaultLayout from "./layouts/DefaultLayout";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const KEYS_TO_RENDER = ["name", "description", "price", "date"];

function MyProducts() {
  const { products, error } = useData(
    "http://localhost:3000/api/products/myproducts"
  );

  return (
    <DefaultLayout>
      <Link to="/add-product">
        <IconButton
          colorScheme="teal"
          aria-label="Add Product"
          size="lg"
          icon={<AddIcon />}
        />
      </Link>
      {error ? (
        <p>Sign in to view your products!</p>
      ) : (
        <div>
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
      )}
    </DefaultLayout>
  );
}

export default MyProducts;
