import React, { useState, useRef } from "react";
import products from "../api/products";
import 'bootstrap/dist/css/bootstrap.css';

//TODO: upload images and protect this function

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDesciption] = useState("");
  const [tags, setTags] = useState([""]);
  const [price, setPrice] = useState("");
  const [isAvailable, setAvailability] = useState(true);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [isClothes, setIsClothes] = useState(false);
  const [disableInput, setDisableInput] = useState(true);

  const handleChange = (e) => {
    setIsClothes(e.target.checked);
    e.target.checked ? setDisableInput(false) : setDisableInput(true);
    console.log(e.target.checked);
  };

  const handleSubmit = async (e) => {
    // const { _id: id } = await users.getUserInfo();
    const productData = {
      name,
      description,
      tags,
      price,
      isAvailable,
      additionalNotes,
      size,
      color,
      isClothes,
      // owner: id,
    };
    await products.creatProduct(productData);
  };

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit}>
        <h1>Add a product:</h1>
        <div className="mb-3">
          <label htmlFor="add-image" className="form=label">
            Add an image
          </label>
          <input />
        </div>
        <div className="mb-3">
          <label htmlFor="product-name" className="form-label">
            Product name
          </label>
          <input
            className="form-control"
            id="product-name"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product description
          </label>
          <textarea
            id="description"
            className="form-control"
            required
            rows={4}
            cols={40}
            value={description}
            onChange={(e) => setDesciption(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Product tags
          </label>
          <input
            placeholder="Add tags"
            id="tags"
            className="form-control"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product price
          </label>
          <input
            placeholder="Product price"
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="abailability" className="form-label">
            Product availability
          </label>
          <input
            placeholder="Availability"
            id="availability"
            className="form-control"
            value={isAvailable}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="aditional-notes" className="form-label">
            Add additional notes?
          </label>
          <textarea
            className="form-control"
            id="aditional-notes"
            required
            rows={4}
            cols={40}
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="clothing-item" className="form-label">
            Clothing item?
          </label>
          <input
            className="form-control"
            id="clothing-item"
            type="checkbox"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="size" className="form-label">
            Product size
          </label>
          <input
            placeholder="Product size"
            className="form-control"
            id="size"
            type="number"
            value={size}
            disabled={disableInput}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">
            Product color
          </label>
          <input
            placeholder="Product color"
            id="color"
            className="form-control"
            value={color}
            disabled={disableInput}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-primary" type="submit"></button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
