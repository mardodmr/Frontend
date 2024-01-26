import axios from "axios";

// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.baseURL = "http://localhost:3000/api/products";
//     config.headers["x-auth-token"] = token;
//   }
//   return config;
// });

const token = localStorage.getItem("token");

export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "x-auth-token": token },
});
