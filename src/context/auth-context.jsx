import { createContext, useState, useContext, useEffect } from "react";
import { getUserInfo, userHasProducts } from "api/users";
import { loginUser, logoutUser } from "api/auth";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [currentProductId, setCurrentProductId] = useState("");
  const [userFullName, setUserFullName] = useState({});
  const [hasProducts, setHasProducts] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") !== null ? true : false
  );

  async function fetchUserInfo() {
    const { firstName, lastName } = await getUserInfo();
    setUserFullName({ firstName, lastName });
    console.log("I'm in context", firstName, lastName);
  }

  async function fetchUserHasProducts() {
    setHasProducts(await userHasProducts());
  }

  function userLogOutLogic() {
    logoutUser();
    setIsAuthenticated(false);
    setUserFullName({});
  }

  async function login(credentials) {
    const ret = await loginUser(credentials);
    setIsAuthenticated(true);
    return ret;
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserInfo();
      fetchUserHasProducts();
    }
  }, [isAuthenticated]);

  const value = {
    fetchUserInfo,
    userFullName,
    isAuthenticated,
    hasProducts,
    userLogOutLogic,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
