import Shop from "components/shop/Shop";
import Banner from "components/home/Banner";
import Categories from "./Categories";
import DefaultLayout from "../layouts/DefaultLayout";
import CustomCarousel from "./CustomCarousel";
import useProductStore from "../../zustand-stores/filter-store";

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
          <CustomCarousel />
        </>
      )}
    </DefaultLayout>
  );
}

export default Home;
