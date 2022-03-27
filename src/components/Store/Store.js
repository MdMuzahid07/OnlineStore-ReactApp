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

        let newCart = [ ];

        if(cart.length <= 3) {

            const isExists = cart.find((product) => product.id === cartProduct.id);

            if(!isExists) {
                newCart = [...cart, cartProduct ];
                setCart(newCart);
            }
            else {
                alert("Already Added This Product")
            }
           
        } 
        else {
            alert("You Can Add Only 4 Products On Cart");
        }

    };


    const getOne = () => {
        const random = parseInt(Math.random() * 4);
        const productCart = cart[random].name;
        alert(productCart);
    };


    // reset cart products

    const resetCart = () => {
        setCart([]);
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
                    <button onClick={getOne} className='btn'>Choose One</button>
                    <button onClick={resetCart} className='btn'>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Store;