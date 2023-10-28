import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { getProduct, creatProduct, updateProduct } from "api/products";
import "bootstrap/dist/css/bootstrap.css";
import "styles/addproduct.css";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import Form from "react-bootstrap/Form";
import icon from "assets/products/product-icon.png";

//TODO: upload images and protect this function

function AddProduct(props) {
  const [name, setName] = useState("");
  const [description, setDesciption] = useState("");
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState("");
  const [isAvailable, setAvailability] = useState(true);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [isClothes, setIsClothes] = useState(false);
  const [disableInput, setDisableInput] = useState(true);
  const [productImg, setProductImg] = useState("");
  const navigate = useNavigate();
  const { currentProductId } = useAuth();
  const animatedComponents = makeAnimated();
  const tagOptions = [
    { value: "phone case", label: "Phone Cases" },
    { value: "jewelry", label: "Jewelry" },
    { value: "necklace", label: "Necklace" },
    { value: "custom gift", label: "Custom Gifts" },
    { value: "accessories", label: "Accessories" },
    { value: "art", label: "Art" },
    { value: "beauty", label: "Beauty" },
  ];

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
      productImg,
    };
    if (props.button === "add") {
      await creatProduct(productData);
      console.log("added");
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
        productImg,
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
      setProductImg(productImg);
    }

    if (props.button === "update") {
      console.log("i'm getting product info to display here");
      fetchProductInfo();
    }
  }, []);

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit}>
        {props.button === "update" ? (
          <h1>Update Product:</h1>
        ) : (
          <h1>Add Product:</h1>
        )}
        <img src={icon} width={171} height={180} alt={""}></img>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Product image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <div className="mb-3">
          <label htmlFor="product-image" className="form-label">
            Product image
          </label>
          <input
            className="form-control"
            id="product-image"
            placeholder="image url"
            value={productImg}
            onChange={(e) => setProductImg(e.target.value)}
          />
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
          <CreatableSelect
            className="mb-3"
            components={animatedComponents}
            isMulti
            isClearable
            options={tagOptions}
            onChange={(e) => setTags(e.map((index) => index.value))}
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
        {/* <div className="mb-3">
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
        </div> */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleChange}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Clothing item?
          </label>
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
