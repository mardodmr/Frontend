import React, { useEffect, useState } from "react";
import AddCartItem from "components/cart/AddCartItem";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function ProductCard(props) {
  //const {login credentials and userId} = useContext
  const [expanded, setExpanded] = useState(false);
  const {
    _id,
    name,
    description,
    tags,
    price,
    isAvailable,
    isClothes,
    size,
    color,
    owner,
  } = props.data; // destructure orders data object from props

  const handleClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title onClick={handleClick}>
          {name}
          <h6>
            <Badge bg="secondary">Tags: {tags}</Badge>
          </h6>
        </Card.Title>
        <Card.Text>
          <b>{description}</b>
          <br />
          Price: {`${price} `} Syrian Lira
        </Card.Text>
      </Card.Body>
      {expanded && (
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Product ID: {_id}</ListGroup.Item>
          <ListGroup.Item>
            Owner: {owner.firstName} {owner.lastName}
          </ListGroup.Item>
          {isClothes && (
            <ListGroup.Item>
              Size: {size} | Color: {color}
            </ListGroup.Item>
          )}
        </ListGroup>
      )}
      {props.cart === true && (
        <Card.Body>
          <AddCartItem data={{ _id, name, price /*img */ }} />
        </Card.Body>
      )}
    </Card>
  );
}

export default ProductCard;
