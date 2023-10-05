import React from 'react';
import '../Footer.css'; 
import Instagram from '../images/instagram-icon.png';
import Facebook from '../images/facebook.icon.webp';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-content'>
      <p>&copy; 2023 Golden Dogs</p>

      <div className="social-icons">
      <a href="https://www.instagram.com/GoldenDogs" target="_blank" rel="noopener noreferrer">
        <img id="instagram" src={Instagram} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/GoldenDogs" target="_blank" rel="noopener noreferrer">
        <img id="facebook"src={Facebook} alt="Facebook" />
      </a>
    </div>
    </div>
    </footer>
  );
}

export default Footer;
