import apiInstance from "./api-instance";
import jwtDecode from "jwt-decode";

const urlEndpoint = "/auth";

//Register email and password
export const createUser = async (userData) => {
  try {
    const { data: jwt } = await apiInstance.post(
      `${urlEndpoint}/credentials`,
      userData
    );
    localStorage.setItem("token", jwt);
  } catch (error) {
    console.log(error);
  }
};

//Log in with email and password
export const loginUser = async (userData) => {
  try {
    const { data: jwt } = await apiInstance.post(`${urlEndpoint}/`, userData); //email and pass
    localStorage.setItem("token", jwt);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// this returns an id of user credentials and not user data
export const getUserCredentialsId = () => {
  try {
    const jwt = localStorage.getItem("token");
    console.log(jwtDecode(jwt), "this is jwt");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
};

export default { getUserCredentialsId, createUser, loginUser };
