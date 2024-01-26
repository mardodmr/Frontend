import Banner from "components/Banner";
import DefaultLayout from "./DefaultLayout";
import MultiCarousel from "./MultiCarousel";
import Categories from "./Categories";
import useProductStore from "../stores/store";
import Shop from "components/Shop";

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
          <MultiCarousel />
        </>
      )}
    </DefaultLayout>
  );
}

export default Home;
