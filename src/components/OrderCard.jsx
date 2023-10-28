import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { updateOrderPaid, updateOrderStatus } from "api/orders";
import { useAuth } from "context/auth-context";

function OrderCard(props) {
  //after getting queried data along with additional props that determine the tab info to display in a card
  const { _id, date, price, size, color, productId, buyer, owner, quantity } =
    props.data;
  const { user_id } = useAuth();

  const payClick = async (e) => {
    e.preventDefault();
    await updateOrderPaid(_id);
  };

  const fulfillClick = async (e) => {
    e.preventDefault();
    await updateOrderStatus(_id);
  };

  return (
    <div style={{ width: "20rem" }}>
      <Card>
        <Card.Header>
          <p>Order ID: {_id}</p>
          <p>Product ID: {productId._id}</p>
        </Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Date of order: {date}</ListGroup.Item>
          <ListGroup.Item>Quantity: {quantity} </ListGroup.Item>
          <ListGroup.Item>Size: {size ? size : "N/A"}</ListGroup.Item>
          <ListGroup.Item>Color: {color ? color : "N/A"}</ListGroup.Item>
          <ListGroup.Item>
            {user_id === buyer._id ? (
              <div>
                <p>Owner Info:</p>
                <p>
                  full name: {owner.firstName} {owner.lastName}
                </p>
                <p>phone: {owner.phone}</p>
                <p>Syriatel cash id: {owner.cashId}</p>
              </div>
            ) : (
              <div>
                <p>Buyer Info:</p>
                <p>
                  full name: {buyer.firstName} {buyer.lastName}
                </p>
                <p>phone: {buyer.phone}</p>
                <p>Syriatel cash id: {buyer.cashId}</p>
              </div>
            )}
          </ListGroup.Item>
          <ListGroup.Item>Total: {price.toLocaleString()}</ListGroup.Item>
        </ListGroup>
        {props.renderButtons && (
          <div style={{ margin: 10 }}>
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
