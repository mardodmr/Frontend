import Carousel from "react-bootstrap/Carousel";
import { Image, AspectRatio, Box } from "@chakra-ui/react";
import bannerItems from "constants/bannerItems";
import useProductStore from "../../zustand-stores/filter-store";

function Banner() {
  const { setUserType } = useProductStore();
  return (
    <Box paddingBottom="10" paddingTop="4">
      <Carousel pause={"hover"}>
        {bannerItems.map((item) => {
          return (
            <Carousel.Item
              key={item.userType}
              onClick={() => setUserType(item.userType)}
              interval={5000}
            >
              <AspectRatio ratio={4 / 1.1}>
                <Image src={item.img} alt={item.userType} />
              </AspectRatio>
              <Carousel.Caption style={{ fontFamily: "avenir-next" }}>
                <h1>{item.caption}</h1>
                <h5>{item.subCaption}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default Banner;
