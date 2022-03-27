import React from 'react';
import './Cart.css';

const Cart = ({ name }) => {
    // const { cart, name } = props;

    return (
        <div className='cart-div'>
            <p>{name}</p>
        </div>
    );
};


export default Cart;