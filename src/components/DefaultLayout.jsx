import React from "react";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <NavbarComponent />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
