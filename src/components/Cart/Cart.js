import React from 'react';
import './Cart.css';

const Cart = ({ cart, name }) => {
    // const { cart, name } = props;
    for (const product of cart) {
        name = product.name;

    }



    return (
        <div className='cart-div'>
            <h4>Order Summary</h4>
            {/* <p>Selected Items: {cart.length}</p> */}
            <p>{name}</p>

            <div >
                <button>CHOOSE 1 FOR ME</button>
                <button className='choose-button'>CHOOSE AGAIN</button>
            </div>

        </div>
    );
};

export default Cart;