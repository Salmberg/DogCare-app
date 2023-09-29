import { useRef } from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';
import '../Navbar.css';


function Navbar(props) {
    const navRef = useRef();
    
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_navbar');
    }
    
    

    return (

        <header>
            <nav ref={navRef}>
                <ul>
                <div onClick={props.nextScreen}>Hem</div>
                <div onClick={props.nextScreen}>Våra hundar</div>
                <div onClick={props.nextScreen}>Tjänster</div>
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