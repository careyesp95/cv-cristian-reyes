import React from "react";
import "./Slider.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';



const slidesInfo = [
  {
    id:1,
    src:"/home.png",
    alt: "JamStack",
    url: "https://github.com/sergiogrimaldo/EcommercePG",
    target:"_blank",
    desc:'Website',
    icon:faArrowUpFromBracket

  },
  {
    id:2,
    src:"/landing.png",
    alt: "JamStack futures",
    url: "https://ecommerce-pg.vercel.app/home",
    target:"_blank",
    desc:'Repository',
    icon:faGithub
  }
  
];

const slides = slidesInfo.map((slide) => (
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

export default slides;
