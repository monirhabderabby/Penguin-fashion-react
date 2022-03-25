import React from 'react';
import { useState } from 'react';
import './Product.css'

const Product = (props) => {
    const {setCartCount} = props
    const {image, name, price} = props.product

    return (
        <div className='col-lg-3 col-md-6 mb-5' data-aos="fade-up"
        data-aos-duration="3000">
            <div className='custom-card'>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <h3>${price}</h3>
                <button onClick={setCartCount} type="button" class="cart-btn">
                    Add To Cart
                    </button>
            </div>

            
            
        </div>
        
    );
};

export default Product;