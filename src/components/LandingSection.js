import React from "react";
import './LandingSection.css';
import {Heading} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { faLaptopCode  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaReact, FaNode, FaHtml5 } from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {IoLogoCss3} from 'react-icons/io';
import perfil from '../assets/img/profile.png';
import ButtonCv from './ButtonCv.js';

const profile =[{
  id:1,
  greeting: "Hi, I'm Cristian Reyes!",
   bio1: `I’m a Full Stack Developer and I’m also an Electronic Engineer, with experience like a scientific researcher, team leader, backend and frontend developer.`,
   icon:faLaptopCode

}]


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    >
      <div className='image-landing-section'>
        <img src={perfil} alt='perfil'/>
      </div>
    <Heading 
      as='h1' 
      size='md' 
      color='black'
      justifyContent="center"
      alignItems="center"
      fontFamily='Calibri, sans-serif'
      >{
      <>
        <div className='box-landing'>
          <span></span>
        </div>
        {
          profile && profile.map(e => {
            return (
              <>
                  <span
                  key={e.id}
                  >{e.greeting}</span>
                  <FontAwesomeIcon icon={e.icon} size="2xl"/>
                  <ButtonCv />
              </>
            )
          })
        }
      </>
    }</Heading>
    <Heading
      padding={4}
      color='black'
      textAlign='justify'
      as='h3' 

    >
        {
        profile && profile.map(e => {
          return (
            <span className='container-span-biography'>{e.bio1}</span>
          )
        })    
        }
    </Heading>
    <Heading
      as='span'
      textAlign='justify'
      color='black'
    >
      {
        <span className='span-container-stack'>Stack:{ <><FaReact  className="span-icons" size="50px" color="blue" /> <FaNode className="span-icons" size="50px" color="green" /> <FaHtml5 className="span-icons" size="50px" color="orange"/> <TbBrandJavascript className="span-icons" size="50px" color="yellow"/> <IoLogoCss3  className="span-icons" size="50px" color="blue" />
        </>}</span> 
      }
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
