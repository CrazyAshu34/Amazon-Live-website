import React from 'react';
import './Nav.css';
import logo from './Amazon_logo.png';

const Navbar = () => {
    return (
        <div className='header'>
            <ul className='myul'>
                <li><img className='logo' src={logo} alt='logo' /></li>
                <li className='distance'><p className='small'>Hello</p><p className='big'>select your adress</p></li>
                <li><input className='inp' placeholder='Search' /></li>
                <li><button className='myButton'><img className='search_img' src="https://www.freeiconspng.com/uploads/search-icon-png-5.png" alt="btn" /> </button></li>
            </ul>
        </div>
    );
};

export default Navbar;
