import './Footer.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer(){
    const socialsMedia = [
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

    return (
        <footer className='container-footer'>
            <nav className='container-nav-footer'>
                     <div className='box-footer'>
                        <span></span>
                     </div>
                {
                    socialsMedia && socialsMedia.map(e => {
                        return (
                        <a
                            href={e.url}
                            key={e.id}
                            target={e.target}
                        >
                        <FontAwesomeIcon 
                            className='icon-style-footer'
                            icon={e.icon} 
                            size="2x" 
                        />
                        </a>
                        )
                    })
                }
                <div className='container-footer-contact'>
                    <h1>Contact Me: </h1>
                    <h2>Email: crcarped9@gmail.com</h2>
                    <h3>Phone: (+57) 312 588 5365</h3>
                </div>
            </nav>
            <span> © Cristian Reyes 2023 </span>
        </footer>
    )

}

export default Footer;