import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const {addedOnCart} = props
    
    const {image, name} = addedOnCart;

    return (
        <div>
            <div className='cart-details'>
                <img src={image} alt="Cart_Image"/>
                <h5>Model: {name}</h5>
            </div>
        </div>
    );
};

export default Cart;