import axios from "axios";

const urlEndpoint = "http://localhost:3000/api/products";

export const getProductsBasedOnTag = async (tag, page, onError) => {
  try {
    const { data } = await axios.get(
      `${urlEndpoint}/tags/${tag}/?page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
    onError?.(error);
  }
};

export const getProductsBasedOnUserType = async (userType, page) => {
  try {
    const { data } = await axios.get(
      `${urlEndpoint}/${userType}/?page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (page) => {
  try {
    const { data } = await axios.get(`${urlEndpoint}/?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyProducts = async () => {
  try {
    const { data } = await axios.get(`${urlEndpoint}/myproducts`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    const { data } = await axios.get(`${urlEndpoint}/id/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const creatProduct = async (productData) => {
  try {
    const { data } = await axios.post(`${urlEndpoint}/`, productData);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const { data } = await axios.put(`${urlEndpoint}/${id}`, productData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const { data } = await axios.delete(`${urlEndpoint}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export default {
  deleteProduct,
  updateProduct,
  creatProduct,
  getProduct,
  getAllProducts,
  getProductsBasedOnTag,
};
