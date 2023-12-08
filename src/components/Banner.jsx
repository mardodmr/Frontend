import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useBanner } from "context/banner-context";
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
    <div
      style={{
        // height: "30px",
        paddingLeft: 200,
        paddingRight: 200,
      }}
    >
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
              <img
                className="d-block w-100"
                src={item.img}
                alt={item.userType}
              />
              <Carousel.Caption>
                <h1>{item.caption}</h1>
                <h5>{item.subCaption}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        {/*  */}
      </Carousel>
    </div>
  );
}

export default Banner;
