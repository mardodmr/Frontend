import axios from "axios";

const urlEndpoint = "http://localhost:3000/api/orders";

export const getOrdersIBought = async (status) => {
  try {
    const { data } = await axios.get(`${urlEndpoint}/purchased/${status}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrdersOfMyProducts = async (status) => {
  try {
    const { data } = await axios.get(`${urlEndpoint}/process/${status}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const creatOrder = async (orderData) => {
  try {
    const { data } = await axios.post(`${urlEndpoint}/`, orderData);
  } catch (error) {
    console.log(error);
  }
};

// Update an order --> paid: true
export const updateOrder = async (id) => {
  try {
    const { data } = await axios.put(`${urlEndpoint}/paid/${id}`);
  } catch (error) {
    console.log(error);
  }
};

// Update an order --> status: fulfilled / pending
export const updateOrderStatus = async (id) => {
  try {
    const { data } = await axios.put(`${urlEndpoint}/status/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    // no clear implementation
  } catch (error) {
    console.log(error);
  }
};

export default {
  deleteProduct,
  updateOrder,
  updateOrderStatus,
  creatOrder,
  getOrdersOfMyProducts,
  getOrdersIBought,
};
