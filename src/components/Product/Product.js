import React from 'react';
import { useState } from 'react';
import './Product.css'

const Product = (props) => {
    const {setCartCount} = props
    const {image, name, price} = props.product

    return (
        <div className='col-lg-3 mb-5'>
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