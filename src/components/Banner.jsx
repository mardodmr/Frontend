import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useBanner } from "context/banner-context";
import img1 from "assets/banner/families-of-martyrs.png";
import img2 from "assets/banner/war-wounded.jpg";
import img3 from "assets/banner/single-parent.jpg";

const bannerItems = [
  { img: img1, userType: "familiesOfMartyrs" },
  { img: img2, userType: "warWounded" },
  { img: img3, userType: "singleParent" },
];

function Banner({}) {
  const { setUserType } = useBanner();

  return (
    <Carousel>
      {bannerItems.map((item) => {
        return (
          <Carousel.Item
            key={item.userType}
            onClick={(e) => {
              setUserType(item.userType);
            }}
            interval={5000}
          >
            <img className="d-block w-100" src={item.img} alt={item.userType} />
            <Carousel.Caption>
              <h2></h2>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
      {/*  */}
    </Carousel>
  );
}

export default Banner;