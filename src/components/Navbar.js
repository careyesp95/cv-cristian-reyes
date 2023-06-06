import './Navbar.css';
import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
      id:1,
      icon: faGithub,
      url: "https://github.com/careyesp95",
      target:"_blank"
    },
    {
      id:2,
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/cristian-reyes-parra-developer",
      target:"_blank"
    },
  ];

function Navbar (){
  const outerBox = useRef();
  useEffect(() => {
    let prevScroll = window.pageYOffset;
    console.log(prevScroll + "move");
    const handleScroll = () => {
      let currScroll = window.pageYOffset;
      console.log(currScroll + "c");
      if (prevScroll > currScroll) {
        outerBox.current.style.transform = "translateY(0)";
        prevScroll = currScroll;
      } else if (prevScroll < currScroll) {
        outerBox.current.style.transform = "translateY(-200px)";
        prevScroll = currScroll;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return(() => {
    window.removeEventListener('scroll', handleScroll);
    }
    )
  }, []);

  function handleClick(anchor){
    console.log(anchor)
    const id = `#${anchor}`;
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({
        behavior:"smooth",
        block:"start"
      })
    }
  }

  function onMenuDropdown(){
    const dropdownMenu = document.querySelector('.dropdown-menu')
    dropdownMenu.classList.toggle('open')
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      ref={outerBox}
      
    >
      <nav className='container-nav'>
        <>
            {
              socials && socials.map(e => {
                return (
                  <a
                    href={e.url}
                    key={e.id}
                    target={e.target}
                  >
                  <FontAwesomeIcon 
                    className='icon-style'
                    icon={e.icon} 
                    size="2x" 
                  />
                  </a>
                )
              })
            }
          <ul className='ul-container'>
            <li><a  className='a-hover-container' href='/#about' onClick={handleClick}>About Me</a></li>
            <li><a  className='a-hover-container' href='/#projects' onClick={handleClick}>Projects</a></li>
            <li><a  className='a-hover-container' href='/#contact' onClick={handleClick}>Contact Me</a></li>
          </ul>
          <button
            onClick={onMenuDropdown}
          >
              <div></div>
              <div></div>
              <div></div>
          </button>
          <menu className='dropdown-menu'>
              <li><a  className='a-hover-container' href='/#about' onClick={handleClick}>About Me</a></li>
              <li><a  className='a-hover-container' href='/#projects' onClick={handleClick}>Projects</a></li>
              <li><a  className='a-hover-container' href='/#contact' onClick={handleClick}>Contact Me</a></li>
          </menu>
        </>
      </nav>
    </Box>
  )
}

export default Navbar;