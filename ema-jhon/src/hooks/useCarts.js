
import { useState, useEffect } from 'react';
import { getStoredCart } from "../utilities/fakedb"
import Product from './../components/Header/product/Product';
import useProducts from './useProducts';


const useCart = (products) => {

    const [cart, setCart] = useState([]);

    useEffect((products) => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {

            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);


            }
        }
        setCart(savedCart);

    }, [products]);

    return [cart, setCart];

}
export default useCart;