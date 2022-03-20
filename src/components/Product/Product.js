import React from 'react';
import './Product.css'

const Product = (props) => {
    const {image, name, price} = props.product

    return (
        <div className='col-lg-3'>
            <div className='custom-card'>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <h3>{price}</h3>
                <button type="button" class="cart-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add To Cart
</button>
            </div>

            
            
        </div>
        
    );
};

export default Product;