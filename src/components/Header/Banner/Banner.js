import React from 'react';
import './Banner.css'
import banner from '../images/banner.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div>
            <h1>Shopping with penguin<br />
<span className='title-color'>In Summer</span></h1>
<button className='btn'>Explore Now</button>
            </div>
            <img src={banner} alt="" />
            
        </div>
    );
};

export default Banner;