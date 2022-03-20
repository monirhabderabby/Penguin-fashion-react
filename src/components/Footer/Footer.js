import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <div className='subscribe'>
                    <input type="text" placeholder='Type your email here'/>
                    <button className='btn'>Subscribe</button>
                </div>
            </div>

            <div>
                <a href="">Shop</a>
                <a href="">About Us</a> <br />
                <a href="">Terms and Condition</a>
                <a href="">Be a Penguiner</a> <br />
                <a href="">Contact Us</a>
                <a href="">Our Team</a>
            </div>
            &copy; All Right Reserved By Penguin Fashion | 1999 - 2022
        </div>
    );
};

export default Footer;