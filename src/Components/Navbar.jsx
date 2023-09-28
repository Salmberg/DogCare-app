import { useRef } from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';
import '/src/Navbar.css';


function Navbar(props) {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_navbar');
    }

    return (

        <header>
            <nav ref={navRef}>
                <ul>
                    <a href="/#">Home</a>
                    <a href="/#" onClick={props.nextScreen}>Dogs</a>
                    <a href="/#">Services</a>
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