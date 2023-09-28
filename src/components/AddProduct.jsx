import React, { useState, useEffect } from "react";
import { getProduct, creatProduct, updateProduct } from "api/products";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useAuth } from "context/auth-context";

//TODO: upload images and protect this function

function AddProduct(props) {
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
  const navigate = useNavigate();
  const { currentProductId } = useAuth();

  const handleChange = (e) => {
    setIsClothes(e.target.checked);
    e.target.checked ? setDisableInput(false) : setDisableInput(true);
    console.log(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    if (props.button === "add") {
      await creatProduct(productData);
      navigate("/products", { replace: true });
    } else {
      await updateProduct(currentProductId);
      navigate("/products", { replace: true });
    }
  };

  useEffect(() => {
    async function fetchProductInfo() {
      const {
        name,
        description,
        tags,
        price,
        isAvailable,
        additionalNotes,
        size,
        color,
        isClothes,
      } = await getProduct(currentProductId);
      setName(name);
      setDesciption(description);
      setTags(tags);
      setPrice(price);
      setAvailability(isAvailable);
      setAdditionalNotes(additionalNotes);
      setSize(size);
      setColor(color);
      setIsClothes(isClothes);
    }

    if (props.button === "update") {
      console.log("i'm getting product info to display here");
      fetchProductInfo();
    }
  }, []);

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit}>
        {props.button === "save" ? (
          <h1>Add Product:</h1>
        ) : (
          <h1>Update Product:</h1>
        )}
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
          <label htmlFor="availability" className="form-label">
            Product availability
          </label>
          <Form.Switch
            type="switch"
            id="custom-switch"
            label="In-Stock"
            onChange={(e) => setAvailability(e.target.checked)}
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
          <button className="btn btn-primary" type="submit">
            {props.button}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
