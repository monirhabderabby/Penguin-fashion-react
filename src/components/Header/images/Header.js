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
                    <p type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">Account</p>
                    <p>Cart<sup>{cartValue}</sup></p>
                </div>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Create a Account</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className='modal-custom-body'>
                        <label htmlFor="">Name:</label>
                        <input className='modal-input' type="text" placeholder='Your Name' /> <br />
                        <label htmlFor="">Email:</label>
                        <input className='modal-input' type="email" name="" id="" placeholder='Your E-mail'/> <br />
                        <label htmlFor="">Password:</label>
                        <input className='modal-input' type="password" name="" id="" placeholder='Your Password'/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="modal-btn" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="modal-btn">Sign Up</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Banner></Banner>
        </div>   

    );
};

export default Header;