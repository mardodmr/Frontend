import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

// axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
