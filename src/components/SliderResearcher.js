import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import SlidesResearcher from "./SlidesResearcher.js";
import "./Slider.css";

const SliderResearcher = () => {
  return (
    <div className="carousel-container">
        <div className="carousel-title">
          <h2> Efficient Wireless Power Transfer </h2>
        </div>

      <Carousel
        arrows
        slidesPerPage={4}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={SlidesResearcher}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};

export default SliderResearcher;