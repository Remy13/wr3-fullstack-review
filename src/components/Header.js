import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return <header>
        <div className='logo-container'>
            <img alt='logo' src="https://www.clipartmax.com/png/middle/101-1015647_i-made-yall-a-snoo-reddit-logo-png.png" className='logo'/>
        </div>
        <h1>Schmeddit</h1> 
            <nav className='navigation'>
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/front_page">Front Page</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </nav>
    </header>
}

export default Header;