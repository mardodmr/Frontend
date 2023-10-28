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
  const [hasProducts, setHasProducts] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") !== null ? true : false
  );
  const [user_id, setUser_ID] = useState("");

  async function fetchUserInfo() {
    const { firstName, lastName, _id } = await getUserInfo();
    setUser_ID(_id);
    setUserFullName({ firstName, lastName });
    console.log("I'm in context", firstName, lastName);
  }

  async function fetchUserHasProducts() {
    const { numberOfProducts } = await userHasProducts();
    setHasProducts(numberOfProducts);
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
    currentProductId,
    setCurrentProductId,
    user_id,
    setUser_ID,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
