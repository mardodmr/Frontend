import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { updateOrderPaid, updateOrderStatus } from "api/orders";

function OrderCard(props) {
  //after getting queried data along with additional props that determine the tab info to display in a card
  const { _id, date, price, size, color, productId, buyer, quantity } =
    props.data;

  const payClick = async (e) => {
    e.preventDefault();
    await updateOrderPaid(_id);
  };

  const fulfillClick = async (e) => {
    e.preventDefault();
    await updateOrderStatus(_id);
  };

  return (
    <div>
      <Card>
        <Card.Header as="h4">
          <p>
            Order ID: {_id} / Product ID: {productId._id}
          </p>
        </Card.Header>
        <Card.Text>
          Date of order: {date}
          Quantity: {quantity}
          Size: {size ? size : "N/A"}
          Color: {color ? color : "N/A"}
          Buyer Info: {buyer.firstName}
          {buyer.lastName}
          {buyer.phone}
          {buyer.cashId}
          Total: {price}
        </Card.Text>
        {props.renderButtons && (
          <div>
            <Button variant="primary" onClick={payClick}>
              Paid
            </Button>{" "}
            <Button variant="primary" onClick={fulfillClick}>
              Fulfilled
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default OrderCard;
