import React from "react";
import { BannerContextProvider } from "context/banner-context";
import Banner from "components/Banner";
import Shop from "components/Shop";
import Footer from "components/Footer";
import NavbarComponent from "components/NavbarComponent";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function Home() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "side main" "footer footer"`, //1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        <NavbarComponent />{" "}
      </GridItem>
      <Show above="lg">
        <GridItem area="side" bg="gold">
          Side
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        <BannerContextProvider>
          <Banner />
          <Shop />
        </BannerContextProvider>
      </GridItem>
      <GridItem area="footer" bg="blue">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default Home;
