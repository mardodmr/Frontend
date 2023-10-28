import React, { useState } from "react";
import AddCartItem from "components/cart/AddCartItem";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";

function ProductCard(props) {
  const width = 286;
  const height = 180;
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
    productImg,
  } = props.data; // destructure orders data object from props

  const handleClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" width={width} height={height} src={productImg} />
      <Card.Body>
        <Card.Title onClick={handleClick} style={{ cursor: "pointer" }}>
          {name}
          <Stack direction="horizontal" gap={2}>
            {tags?.map((tag) => {
              return (
                <Badge style={{ fontSize: 12 }} pill bg="secondary">
                  {tag}
                </Badge>
              );
            })}
          </Stack>
        </Card.Title>
        <Card.Text>
          <b>{description}</b>
          <br />
          Price: {`${price.toLocaleString()} `} Syrian Lira
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
          <AddCartItem data={{ _id, name, price, size, color }} />
        </Card.Body>
      )}
    </Card>
  );
}

export default ProductCard;
