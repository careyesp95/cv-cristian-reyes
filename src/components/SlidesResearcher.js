import React from "react";
import "./Slider.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const slidesInfo = [
  {
    id:1,
    src:"/paperIEEE.png",
    alt: "Science research",
    url: "https://ieeexplore.ieee.org/document/9505418",
    target:"_blank",
    desc:'Research',
    icon:faArrowUpFromBracket 
  },
  {
    id:2,
    src:"/certi.png",
    alt: "Science research",
    url: "https://ieeexplore.ieee.org/document/9505418",
    target:"_blank",
    desc:'Research',
    icon:faArrowUpFromBracket

  },

];

const slidesResearcher = slidesInfo.map((slide) => (
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

export default slidesResearcher;
