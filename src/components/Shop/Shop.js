import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);

    }

    const chooseForMe = () => {
        if (cart.length > 0) {
            const randomChoose = [Math.floor(Math.random() * cart.length)];
            setCart([cart[randomChoose]]);

        }
    }
    const chooseAgain = () => {

        setCart([]);

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>

                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h4 className='cart-desc'>Order Summary</h4>

                {
                    cart.map(item => <Cart
                        key={item.id}
                        name={item.name}>

                    </Cart>)


                }


                <div >

                    <button onClick={chooseForMe} className='cart-desc'>CHOOSE 1 FOR ME</button>
                    <button onClick={chooseAgain} className='choose-button'>CHOOSE AGAIN</button>
                </div>
                {/* <Cart></Cart> */}



            </div>

        </div >
    );
};

export default Shop;