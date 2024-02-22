import apiInstance from "./api-instance";

const urlEndpoint = "/products";

export const getProductsBasedOnTag = async (tag, onError) => {
  try {
    const { data } = await apiInstance.get(`${urlEndpoint}/tags/${tag}`);
    return data;
  } catch (error) {
    console.log(error);
    onError?.(error);
  }
};

export const getProductsBasedOnUserType = async (userType) => {
  try {
    const { data } = await apiInstance.get(`${urlEndpoint}/${userType}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async () => {
  try {
    const { data } = await apiInstance.get(`${urlEndpoint}/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getMiniProducts = async () => {
//   try {
//     const { data } = await apiInstance.get(`${urlEndpoint}/mini`);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getMyProducts = async () => {
  try {
    const { data } = await apiInstance.get(`${urlEndpoint}/myproducts`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    const { data } = await apiInstance.get(`${urlEndpoint}/id/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (productData) => {
  try {
    const { data } = await apiInstance.post(`${urlEndpoint}/`, productData);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const { data } = await apiInstance.put(`${urlEndpoint}/${id}`, productData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const { data } = await apiInstance.delete(`${urlEndpoint}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export default {
  deleteProduct,
  updateProduct,
  createProduct,
  getProduct,
  getAllProducts,
  getProductsBasedOnTag,
  // getMiniProducts,
};
