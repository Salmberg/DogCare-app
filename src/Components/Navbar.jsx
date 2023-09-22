import { useRef } from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_navbar');
    }

    return (

        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <ul>
                    <a href="/#">Home</a>
                    <a href="/#">Dogs</a>
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