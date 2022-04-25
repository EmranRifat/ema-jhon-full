import React from 'react';
import useProducts from './../../hooks/useProducts';
import useCart from './../../hooks/useCarts';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h3>Order here...:{products.length}</h3>
            <p>You can order anything from here</p>
            <p>cart has :{cart.length}</p>
        </div>
    );
};

export default Orders;