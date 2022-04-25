import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'
// import useProducts from './../../../hooks/useProducts';

const Shop = () => {
    const [products, setProducts] = useProducts([]);

    const [cart, setCart] = useState([]);
    // console.log(cart);

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, []);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newcart = [...cart, product];
        setCart(newcart);
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        item={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;