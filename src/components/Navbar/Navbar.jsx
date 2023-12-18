import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import closeIcon from '../../img/cross.svg';
import openIcon from '../../img/menu.svg';

function Navbar() {
    const [isNavVisible, setNavVisibility] = useState(false);

    const handleNavBarOpenButton = () => {
        setNavVisibility(true);
    }

    const handleNavBarCloseButton = () => {
        setNavVisibility(false);
    }

    return (
        <div className="div-nav">
            <Link to="/" className="logo"><h1>eShop</h1></Link>
            <button className="openMenu" id="open" onClick={handleNavBarOpenButton}><img src={openIcon} alt="" className="img-nav" /></button>
            {/* <nav className={`navClass ${isNavVisible ? 'visible slide-in-right' : 'slide-in-left'}`}> */}
            <nav className={`navClass ${isNavVisible ? 'visible' : ''}`}>
                <button className="closeMenu" id="close" onClick={handleNavBarCloseButton}><img src={closeIcon} alt="" className="img-nav" /></button>
                <ul className="navList">
                    <li><Link className="menu-link" to="/" onClick={handleNavBarCloseButton}>Home</Link></li>
                    <li><Link className="menu-link" to="/products" onClick={handleNavBarCloseButton}>Products</Link></li>
                    <li><Link className="menu-link" to="/login" onClick={handleNavBarCloseButton}>Log In</Link></li>
                    <li><Link className="menu-link" to="/admin" onClick={handleNavBarCloseButton}>Admin</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
