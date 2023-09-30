import { useRef } from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';
import '../Navbar.css';


function Navbar(props) {
    const navRef = useRef();
    
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_navbar');
    }
    

     // Funktion för att stänga menyn och navigera till nästa skärm
  const handleLinkClick = () => {
    showNavBar(); // Anropa showNavBar för att dölja menyn
    props.nextScreen(); // Anropa props.nextScreen för att navigera till nästa skärm
  }
    

    return (

        <header>
            <nav ref={navRef}>
                <ul>
                <div onClick={handleLinkClick}>Hem</div>
                <div onClick={handleLinkClick}>Våra hundar</div>
                <div onClick={handleLinkClick}>Tjänster</div>
                <div onClick={handleLinkClick}>Kontakt</div>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>   
            </button>
        </header>
    );
}
export default Navbar;