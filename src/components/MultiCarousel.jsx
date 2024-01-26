import useData from "api/hooks/useData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

function MultiCarousel() {
  const { products, error } = useData("/products");

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div
      style={{
        width: "75%",
        margin: "auto",
        backgroundColor: "red",
      }}
    >
      <p style={{ margin: "0", paddingLeft: "15px" }}>FEATURED PRODUCTS</p>

      {!error && (
        <Carousel
          responsive={responsive}
          swipeable={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          partialVisbile={true}
        >
          {products?.map((product) => {
            return (
              <div
                key={product._id}
                style={{
                  padding: "15px",
                }}
              >
                <ProductCard data={product} cart={true} />
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default MultiCarousel;
