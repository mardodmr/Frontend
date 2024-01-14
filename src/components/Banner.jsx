import { useBanner } from "context/banner-context";
import Carousel from "react-bootstrap/Carousel";
import { Image, AspectRatio, Box } from "@chakra-ui/react";
import img1 from "assets/banner/families-of-martyrs.png";
import img2 from "assets/banner/war-wounded.jpg";
import img3 from "assets/banner/single-parent.jpg";

const bannerItems = [
  {
    img: img1,
    userType: "familiesOfMartyrs",
    caption: "Families Of Martyrs",
    subCaption: "View their products and support these families",
  },
  {
    img: img2,
    userType: "warWounded",
    caption: "War Wounded",
    subCaption: "View their products and support these individuals",
  },
  {
    img: img3,
    userType: "singleParent",
    caption: "Single Parents",
    subCaption: "View their products and support these parents",
  },
];

function Banner({}) {
  const { setUserType } = useBanner();

  return (
    <Box paddingBottom={"10"} paddingTop={"10"}>
      <Carousel>
        {bannerItems.map((item) => {
          return (
            <Carousel.Item
              key={item.userType}
              onClick={(e) => {
                setUserType(item.userType);
                // console.log(item.userType);
              }}
              interval={5000}
            >
              <AspectRatio ratio={4 / 1}>
                <Image src={item.img} alt={item.userType} />
              </AspectRatio>
              <Carousel.Caption>
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
