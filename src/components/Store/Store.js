import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Store.css';

const Store = () => {

    const [products, setProduct] = useState([]);

    useEffect( () => {
        fetch('FakeData.json')
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])



    return (
        <div className='store-container'>
            <div className="product-container">
                {
                    products.map((product) => <Products key={product.id} product={product}></Products>)
                }
            </div>
            <div className="cart-container">
                <h2>cart area</h2>
            </div>
        </div>
    );
};

export default Store;