import { createContext, useState, useContext, useEffect } from "react";

export const BannerContext = createContext(null);

export const useBanner = () => {
  return useContext(BannerContext);
};

export const BannerContextProvider = ({ children }) => {
  const [userType, setUserType] = useState("");

  const value = { userType, setUserType };
  return (
    <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
  );
};

export default BannerContext;
