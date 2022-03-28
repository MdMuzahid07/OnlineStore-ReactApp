import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import  { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'

const Products = ({product, addToCartHandler}) => {

    const {name, id, price, image} = product;
    
    return (
        <div>
            <div className="product-card">
                <h3>Model: {name}</h3>
                <img src={image} alt="product_image" />
                <hr />
                <h3>Price: {price}</h3>
                <button onClick={ () => addToCartHandler(product)} className='btn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Products;

<FontAwesomeIcon icon="fa-solid fa-cart-plus" />