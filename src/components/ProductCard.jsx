import React, { useEffect, useState } from "react";

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
    setExpanded(!expanded);
    e.preventDefault();
  };

  return (
    <div className="product-card" onClick={handleClick}>
      {/* <img></img> */}
      {expanded &&
        <div>
          <p>Product ID: {_id}</p>
          <p>Owner: {owner}</p>
        </div>
      }
      <h2>Name: {name}</h2>
      {expanded && (
        <p>
          <b>{description}</b>
        </p>
      )}
      <p> Price: {price}Syrian Lira</p>
      {expanded &&
        <div>
          <p>{tags}</p>
          <p>In-stock: {isAvailable}</p>
          {isClothes &&
            <div className="clothing-item">
              <p>Size: {size}</p>
              <p>Color: {color}</p>
            </div>
          }
        </div>
      }
    </div>
  );
}

export default ProductCard;
