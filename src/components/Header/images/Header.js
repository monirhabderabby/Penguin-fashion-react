import React from 'react';
import './Header.css'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='navBar'>
                <img src={logo} alt="" />
                <div className='menuBar'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Account</p>
                    <p>Cart</p>
                </div>
            </div>
        </div>
    );
};

export default Header;