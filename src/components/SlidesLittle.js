import React from "react";
import "./Slider.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import homeLittle from '../assets/img/homeLittlelemon.png';
import productsLittle from '../assets/img/productsLittle.png';
import bookingLittle from '../assets/img/bookingLittle.png';


const slidesInfo = [
  {
    id:1,
    src:{homeLittle},
    alt: "Little SPA",
    url: "https://github.com/careyesp95/booking",
    target:"_blank",
    desc:'Repository',
    icon:faGithub

  },
  {
    id:2,
    src:{productsLittle},
    alt: "Little SPA",
    url: "https://github.com/careyesp95/booking",
    target:"_blank",
    desc:'Repository',
    icon:faGithub

  },
  {
    id:3,
    src:{bookingLittle},
    alt: "Little SPA",
    url: "https://github.com/careyesp95/booking",
    target:"_blank",
    desc:'Repository',
    icon:faGithub

  },
  
];

const slidesLittle = slidesInfo.map((slide) => (
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

export default slidesLittle;
