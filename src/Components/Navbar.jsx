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
         <h1>Golden dogs</h1>
            <h2>For you and your best friend</h2>

            <nav ref={navRef}>
                <ul>
                <a onClick={handleLinkClick}>Hem</a>
                <a onClick={handleLinkClick}>Våra hundar</a>
                <a onClick={handleLinkClick}>Tjänster</a>
                <a onClick={handleLinkClick}>Kontakt</a>

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