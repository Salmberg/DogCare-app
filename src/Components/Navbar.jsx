import { useRef } from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';
import '../Navbar.css';


function Navbar(props) {
    const navRef = useRef();
    
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_navbar');
    }
    
   
   const handleLinkClickHome = () => {
    showNavBar(); // Anropa showNavBar för att dölja menyn
    props.homeScreen(); // Anropa props.nextScreen för att navigera till nästa skärm
  }
     
  const handleLinkClickDogs = () => {
    showNavBar(); // Anropa showNavBar för att dölja menyn
    props.dogsScreen(); // Anropa props.nextScreen för att navigera till nästa skärm
  }

 const handleLinkClickServices = () => {
        showNavBar(); // Anropa showNavBar för att dölja menyn
        props.servicesScreen(); // Anropa props.nextScreen för att navigera till nästa skärm
      }
         
  const handleLinkClickDogContact = () => {
    showNavBar(); // Anropa showNavBar för att dölja menyn
    props.contactScreen(); // Anropa props.nextScreen för att navigera till nästa skärm
  }
    

    return (

        
        <header>
         <h1>Golden dogs</h1>
            <h2>For you and your best friend</h2>

            <nav ref={navRef}>
                <ul>
                <a onClick={handleLinkClickHome}>Hem</a>
                <a onClick={handleLinkClickDogs}>Våra hundar</a>
                <a onClick={handleLinkClickServices}>Tjänster</a>
                <a onClick={handleLinkClickDogContact}>Kontakt</a>

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