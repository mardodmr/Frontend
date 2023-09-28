import axios from "axios";
import jwtDecode from "jwt-decode";

const urlEndpoint = "http://localhost:3000/api/auth";

export const loginUser = async (userData) => {
  try {
    const { data: jwt } = await axios.post(`${urlEndpoint}/`, userData); //email and pass
    localStorage.setItem("token", jwt);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

// this returns an id of user credentials and not user data
export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem("token");
    console.log(jwtDecode(jwt), "this is jwt");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
};

export default { getCurrentUser, logoutUser, loginUser };
