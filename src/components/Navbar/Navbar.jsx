import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
            <nav className="navbar">
                <Link to="#" className="logo"><h1>eShop</h1></Link>
                <ul className='menu'>
                    <li><Link className="menu-link" to="/">Home</Link></li>
                    <li><Link className="menu-link" to="/products">Products</Link></li>
                    <li><Link className="menu-link" to="/login">Log In</Link></li>
                </ul>
            </nav>
    )
}

export default Navbar