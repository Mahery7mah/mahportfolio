import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';

// import '../assets/styles/BlinkingTriangles.scss';

import Mahery from '../assets/images/Mahery.png';
import Triangle from '../assets/images/triangle.png';
function Main() {

  return (
    <div className="container">


      <div className="about-section">
        <div className="image-wrapper">
          <img src={Mahery} alt="Avatar" />
        </div>
        <div className="content">
          <h1>Mahery Radonirina</h1>
          <p className="job">Developper/Designer</p>
          <div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><WhatsAppIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><FacebookIcon/></a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <div className="button-cv">
          <a href="https://www.linkedin.com/in/yujisato/" className='cv-button' target='_blank'>
          <DownloadIcon/> Download Resume
                  </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;