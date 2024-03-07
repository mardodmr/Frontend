import apiInstance from "./api-instance";

const urlEndpoint = "/orders";

//pending //fulfilled

export const getOrdersIBought = async (status) => {
  try {
    const { data } = await apiInstance.get(
      `${urlEndpoint}/purchased/${status}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrdersOfMyProducts = async (status) => {
  try {
    const { data } = await apiInstance.get(`${urlEndpoint}/process/${status}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const creatOrder = async (orderData) => {
  try {
    const { data } = await apiInstance.post(`${urlEndpoint}/`, orderData);
  } catch (error) {
    console.log(error);
  }
};

// Update an order --> paid: true
export const updateOrderPaid = async (id) => {
  try {
    const { data } = await apiInstance.put(`${urlEndpoint}/paid/${id}`);
  } catch (error) {
    console.log(error);
  }
};

// Update an order --> status: fulfilled / pending
export const updateOrderStatus = async (id) => {
  try {
    const { data } = await apiInstance.put(`${urlEndpoint}/status/${id}`);
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
  updateOrderPaid,
  updateOrderStatus,
  creatOrder,
  getOrdersOfMyProducts,
  getOrdersIBought,
};
