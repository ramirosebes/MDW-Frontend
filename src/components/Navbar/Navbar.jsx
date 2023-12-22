import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../img/cross.svg';
import openIcon from '../../img/menu.svg';
import styles from "./navbar.module.css";

function Navbar() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const token = localStorage.getItem('token');

    const handleNavBarOpenButton = () => {
        setNavVisibility(true);
    }

    const handleNavBarCloseButton = () => {
        setNavVisibility(false);
    }

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.logo}><h1>eShop</h1></Link>
            <button className={styles.openMenu} id="open" onClick={handleNavBarOpenButton}><img src={openIcon} alt="" className={styles.image} /></button>
            <nav className={`${styles.navClass} ${isNavVisible ? styles.visible : ''}`}>
                <button className={styles.closeMenu} id="close" onClick={handleNavBarCloseButton}><img src={closeIcon} alt="" className={styles.image} /></button>
                <ul className={styles.navList}>
                    <li><Link to="/home" onClick={handleNavBarCloseButton}>Home</Link></li>
                    <li><Link to="/products" onClick={handleNavBarCloseButton}>Products</Link></li>
                    {token && <li><Link to="/admin" onClick={handleNavBarCloseButton}>Manage products</Link></li>}
                    <li><Link to="/login" onClick={handleNavBarCloseButton}>{token ? "Log Out" : "Log In"}</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
