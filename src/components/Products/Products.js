import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [Products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://monirhabderabby.github.io/shoe-api/Shoe-API.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <h2 className='pro-title'>Leatest Products</h2>
            
            {
                Products.map(p=> <Product product={p} key={p.id}></Product>)
            }
        </div>
    );
};

export default Products;