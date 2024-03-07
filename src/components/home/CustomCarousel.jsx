import useData from "api/hooks/useData";
import ProductCard from "../products/ProductCard";
import "style-sheets/custom-carousel.css";

function CustomCarousel() {
  const { data } = useData("/products");

  return (
    <div>
      <h3 style={{ padding: "5px", width: "75%", margin: "auto" }}>
        FEATURED PRODUCTS
      </h3>
      <div
        className="carousel"
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          width: "75%",
          margin: "auto",
          position: "relative",
        }}
      >
        {data?.map((product) => {
          return (
            <div
              key={product._id}
              style={{
                padding: "8px",
              }}
            >
              <ProductCard data={product} cart={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomCarousel;
