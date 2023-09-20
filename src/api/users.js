import axios from "axios";

const urlEndpoint = "http://localhost:3000/api/users";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

export const getUserInfo = async () => {
  try {
    const { data } = await axios.get(`${urlEndpoint}/me`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Register email and password
export const createUser = async (userData) => {
  try {
    const { data } = await axios.post(`${urlEndpoint}/credentials`, userData);
  } catch (error) {
    console.log(error);
  }
};

//this id param should be an id from users collection and not credentials collection
export const updateUserInfo = async (userData) => {
  try {
    const { data } = await axios.post(`${urlEndpoint}/`, userData);
  } catch (error) {}
};

export default { updateUserInfo, createUser, getUserInfo };
