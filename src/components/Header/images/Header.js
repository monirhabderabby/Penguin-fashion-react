import React from 'react';
import './Header.css'
import logo from '../images/logo.png'
import Banner from '../Banner/Banner';

const Header = (props) => {
    const { cartValue } = props;
    console.log(cartValue);
    
    return (
        <div className='header'>
            <div className='navBar'>
                <img src={logo} alt="logo" className='logo' />
                <div className='searchBox'>
                    <input type="text" /><p>Search</p>
                </div>
                <div className='menuBar'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p >Account</p>
                    <p>Cart<sup>{cartValue}</sup></p>
                </div>
                
            </div>
            <Banner></Banner>
        </div>   

    );
};

export default Header;