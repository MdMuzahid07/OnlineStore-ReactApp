import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Store.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHourglass1, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Store = () => {

    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    console.log(cart)

    useEffect( () => {
        fetch('FakeData.json')
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])


    // add to cart handler

    const addToCartHandler = (cartProduct) => {
        const newCart = [...cart, cartProduct ];

        setCart(newCart);



    }



    return (
        <div className='store-container'>
            <div className="product-container">
                {
                    products.map((product) => <Products key={product.id} product={product} addToCartHandler={addToCartHandler}></Products>)
                }
            </div>
            <div className="cart-container">
                <h2><FontAwesomeIcon icon={ faShoppingCart }></FontAwesomeIcon> Cart Area</h2>
                {
                    cart.map((addedOnCart) => <Cart key={addedOnCart.id} addedOnCart={addedOnCart}></Cart>)
                }

                <div className="all-btn">
                    <button className='btn'>Choose One</button>
                    <button className='btn'>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Store;