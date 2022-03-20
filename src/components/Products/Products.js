import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = (props) => {
    const [Products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://monirhabderabby.github.io/shoe-api/Shoe-API.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <h2 className='pro-title mt-3 mb-3'>Leatest Products</h2>
            
            <div className='container'>
                <div className='row g-lg-4'>
                {
                    Products.map(p=> <Product setCartCount={props.setCartCount} product={p} key={p.id}></Product>)
                }
                </div>
            </div>
        </div>
    );
};

export default Products;