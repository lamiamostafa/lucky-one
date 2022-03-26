import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...carts, product];
        setCart(newCart);

    }
    // const chooseAgainToCart = (product) => {
    //     console.log(product);
    //     const newCart = [...carts, product];
    //     setCart([]);

    // }
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
                {/* {
                    carts.map(cart => <Cart
                        chooseAgainToCart={chooseAgainToCart}
                        cart={cart}></Cart>)
                } */}


                <Cart cart={carts}
                    selectname={products.name}
                ></Cart>

            </div>

        </div>
    );
};

export default Shop;