import React from "react";
import orderPlaceHolder from "assets/products/cart-icon.jpg";
import { Card } from "react-bootstrap";

export const CartItem = (props) => {
  const { _id, name, price } = props.data;

  return (
    <Card className="bg-dark text-white" style={{ width: "18rem" }}>
      <Card.Img src={orderPlaceHolder} alt="order image" height={230} />
      <Card.Body>
        <Card.Title>Product Name: {name}</Card.Title>
        <Card.Text>Price: {price} Syrian Lira</Card.Text>
      </Card.Body>
    </Card>
  );
};
