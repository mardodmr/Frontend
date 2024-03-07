import React from "react";
import NavbarComponent from "../navigation-bar/NavbarComponent";
import Footer from "components/footer/Footer";

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
