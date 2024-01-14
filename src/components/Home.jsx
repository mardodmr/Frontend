import Shop from "components/Shop";
import Banner from "components/Banner";
import { BannerContextProvider } from "context/banner-context";
import DefaultLayout from "./DefaultLayout";
import MultiCarousel from "./MultiCarousel";

function Home() {
  return (
    <DefaultLayout>
      <BannerContextProvider>
        <Banner />
        <MultiCarousel />
        <Shop />
      </BannerContextProvider>
    </DefaultLayout>
  );
}

export default Home;
