import useData from "api/hooks/useData";
import ProductCard from "../products/ProductCard";
import ProductExpansion from "components/products/product-modal/ProductExpansion";
import ReusableModal from "components/reusable-components/ReusableModal";
import css from "style-sheets/custom-carousel.module.css";

function CustomCarousel() {
  const { data } = useData("/products");

  return (
    <div>
      <h3 style={{ marginBottom: "5px", width: "75%", margin: "auto" }}>
        FEATURED PRODUCTS
      </h3>
      <div className={css.carousel}>
        {data?.map((product) => {
          return (
            <ReusableModal
              modalSize={"xl"}
              key={product._id}
              children={<ProductExpansion />}
              trigger={<ProductCard data={product} />}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CustomCarousel;
