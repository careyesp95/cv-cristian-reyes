import React from "react";
import Slider from './Slider.js';
import SliderRecipes from './SliderRecipes.js';
import './ProjectSection.css';


function ProjectSection () {
  return (
    <main className='container-project-section' id="projects">
      <title>
        Projects
      </title>
      <Slider />
    </main>
  )
};

export default ProjectSection;