import axios from "axios";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
const urlEndpoint = "http://localhost:3000/api/users";

export const userHasProducts = async () => {
  try {
    const { data } = await axios.get(`${urlEndpoint}/hasproduct`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async () => {
  try {
    const { data } = await axios.get(`${urlEndpoint}/me`);
    console.log("i'm getting user info", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Register email and password
export const createUser = async (userData) => {
  try {
    const { data: jwt } = await axios.post(
      `${urlEndpoint}/credentials`,
      userData
    );
    localStorage.setItem("token", jwt);
  } catch (error) {
    console.log(error);
  }
};

// this handler creates user data for the first time
export const createUserInfo = async (userData) => {
  try {
    const { data } = await axios.post(`${urlEndpoint}/`, userData);
  } catch (error) {}
};

//this handler updates user data after creation
export const updateUserInfo = async (userData) => {
  try {
    const { data } = await axios.put(`${urlEndpoint}/`, userData);
  } catch (error) {}
};

export default {
  userHasProducts,
  createUserInfo,
  createUser,
  getUserInfo,
  updateUserInfo,
};
