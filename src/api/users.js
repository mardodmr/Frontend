import apiInstance from "./api-instance";
const urlEndpoint = "/users";

export const userHasProducts = async () => {
  try {
    const { data } = await apiInstance.get(`${urlEndpoint}/hasproduct`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async () => {
  try {
    const { data } = await apiInstance.get(`${urlEndpoint}/me`);
    // console.log("i'm getting user info", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// this handler creates user data for the first time
export const createUserInfo = async (userData) => {
  try {
    const { data } = await apiInstance.post(`${urlEndpoint}/`, userData);
  } catch (error) {}
};

//this handler updates user data after creation
export const updateUserInfo = async (userData) => {
  try {
    const { data } = await apiInstance.put(`${urlEndpoint}/`, userData);
  } catch (error) {}
};

export default {
  userHasProducts,
  createUserInfo,
  getUserInfo,
  updateUserInfo,
};
