import React from "react";
import "./Slider.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";



const slidesInfo = [
  {
    id:1,
    src:"/homeRecip.png",
    alt: "Food SPA",
    url: "https://github.com/careyesp95/App-Food-Main",
    target:"_blank",
    desc:'Repository',
    icon:faGithub

  },
  {
    id:2,
    src:"/homeRecipes.png",
    alt: "Food SPA",
    url: "https://github.com/careyesp95/App-Food-Main",
    target:"_blank",
    desc:'Repository',
    icon:faGithub

  },
  {
    id:3,
    src:"/landingRecipe.png",
    alt: "Food SPA",
    url: "https://github.com/careyesp95/App-Food-Main",
    target:"_blank",
    desc:'Repository',
    icon:faGithub

  },
  
];

const slidesRecipe = slidesInfo.map((slide) => (
  <main className="slide-container" key={slide.id}>
    <a href={slide.url}
      target={slide.target}
    >
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc">
        <FontAwesomeIcon
          className="slide-font-icon"
          icon={slide.icon}
          size="2x"
        />
        <p>{slide.desc}</p>
      </div>
    </a>
  </main>
));

export default slidesRecipe;
