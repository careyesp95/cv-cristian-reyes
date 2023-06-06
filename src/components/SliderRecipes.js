import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import SlidesRecipe from "./SlidesRecipe.js";
import "./Slider.css";

const SliderRecipes = () => {
  return (
    <div className="carousel-container">
        <div className="carousel-title">
          <h2>Food SPA </h2>
        </div>

      <Carousel
        arrows
        slidesPerPage={4}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={SlidesRecipe}
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

export default SliderRecipes;