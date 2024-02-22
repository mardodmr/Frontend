import Banner from "components/home/Banner";
import DefaultLayout from "../layouts/DefaultLayout";
//import MultiCarousel from "./MultiCarousel";
import Shop from "components/shop/Shop";
import useProductStore from "../../zustand-stores/filter-store";
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
