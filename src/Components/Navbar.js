import React from 'react';
import './Css/Nav.css';
import logo from './Amazon_logo.png';

const Navbar = () => {
    return (
        <div>
        <div className='header'>
            <ul className='myul'>
                <li><img className='logo' src={logo} alt='logo' /></li>
                <li className='distance'><p className='small'>Hello</p><p className='big'>select your adress</p>
                </li>
                <li>
                    <select className="myoption">
                        <option id='op1' value="option1">All</option>
                        <option value="option2">B</option>
                        <option value="option3">C</option>
                    </select>
                </li>
                <li id="max-inp"><input className='inp' placeholder='Search Amazon.in' /></li>
                <li><button className='myButton'><img className='search_img' src="https://www.freeiconspng.com/uploads/search-icon-png-5.png" alt="btn" /> </button></li>
                <li> <select className="myoption2">
                    <option value="option1">EN</option>
                    <option value="option2">Hi</option>
                    <option value="option3">BE</option>
                </select>
                </li>
                <li className='distance'><p className='small'>Hello,Ashutosh</p>
                    <select className='account'>
                        <option value="option1">Account&Lists</option>
                    </select></li>
                <li className='distance'><p className='small'>Return</p><p className='big'>&Orders</p>
                </li>
                <li><img className='logo Cart' src="https://media.wired.com/photos/59325eba9be5e55af6c246eb/master/pass/amazoncart-feat.jpg" alt='Cart' /></li>

            </ul>
        </div>

        <div className='next-header'>
            <ul className='myul-2'>
                <li>
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </li>

                <li>All</li>
                <li>AmazonminiTV</li>
                <li>Sell</li>
                <li>GiftCards</li>
                <li>AmazonPay</li>
                <li>BuyAgain</li>
                <li>Coupons</li>
                <li>Today'sDeals</li>
                <li>GiftIdeas</li>
                <li>Health,Household&PersonalCare</li>
                <li>AmazonBasics</li>
                <li>BrowsingHistory</li>
                <li>Books</li>
                <li>HomeImprovement</li>
            </ul>
        </div>

    </div>
    );
};

export default Navbar;