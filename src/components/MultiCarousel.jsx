import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAllProducts } from "api/products";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts();
      setAllProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div style={{ width: "75%", margin: "auto", backgroundColor: "red" }}>
      <p style={{ margin: "0", paddingLeft: "15px" }}>FEATURED PRODUCTS</p>
      <Carousel
        responsive={responsive}
        swipeable={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {allProducts?.map((product) => {
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
    </div>
  );
}

export default MultiCarousel;
