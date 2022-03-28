import React from 'react';
import './Products.css'

const Products = ({product}) => {

    console.log(product)

    const {name, id, price, image} = product;
    
    return (
        <div>
            <div className="product-card">
                <h3>Model: {name}</h3>
                <img src={image} alt="product_image" />
                <hr />
                <h3>Price: {price}</h3>
                <button className='btn'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;