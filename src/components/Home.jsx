import Banner from "components/Banner";
import DefaultLayout from "./DefaultLayout";
//import MultiCarousel from "./MultiCarousel";
import Shop from "components/Shop";
import useProductStore from "../stores/store";
import Categories from "./Categories";
import CustomCarousel from "./CustomCarousel";

function Home() {
  const { userType, category, searchWord } = useProductStore();
  return (
    <DefaultLayout>
      <Categories />
      {userType || category || searchWord ? (
        <Shop />
      ) : (
        <>
          <Banner />
          {/* <MultiCarousel /> */}
          <CustomCarousel />
        </>
      )}
    </DefaultLayout>
  );
}

export default Home;
