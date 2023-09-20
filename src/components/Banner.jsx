import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "assets/banner/families-of-martyrs.png";
import img2 from "assets/banner/war-wounded.jpg"
import img3 from "assets/banner/single-parent.jpg"

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (e, selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img3} alt="single-parent"/>
        <Carousel.Caption>
          <h2></h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img2} alt="war-wounded" />
        <Carousel.Caption>
          <h2></h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img1} alt="families-of-martyrs" />
        <Carousel.Caption>
          <h2></h2>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
