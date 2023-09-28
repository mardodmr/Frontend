import React from "react";
import { BannerContextProvider } from "context/banner-context";
import Banner from "components/Banner";
import Shop from "components/Shop";
import Footer from "components/Footer";

function Home() {
  return (
    <BannerContextProvider>
      <Banner />
      <Shop />
      <Footer />
    </BannerContextProvider>
  );
}

export default Home;
