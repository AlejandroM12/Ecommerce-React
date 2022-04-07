import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(()=> {
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts');
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        }catch(error){
            return [];
        }
    });

    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
     console.log(cartItems)
    }, [cartItems]);

    const addItemToCart = (producto) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart === producto.id
            );

        if(inCart){
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === producto.id){
                        return { ...inCart, cantidad: inCart.cantidad + 1};
                    }else return productInCart
                })
            );
        }else{
            setCartItems([...cartItems, {...producto, cantidad: 1}]);
            }
        };
        const deleteItemCart = (producto) => {
            const inCart = cartItems.find(
                (productInCart) => productInCart.id === producto.id
                );
            if(inCart.cantidad === 1){
                setCartItems(
                    cartItems.filter((productInCart) => productInCart.id !== producto.id)
                );
            }else{
                setCartItems(
                    cartItems.map((productInCart) => {
                    if(productInCart.id === producto.id){
                        return {...inCart, cantidad: inCart.cantidad - 1};
                    }else return productInCart;
                }));
            }
        };
        return (
            <CartContext.Provider value={{cartItems, addItemToCart, deleteItemCart}}>
                {children}
            </CartContext.Provider>
        )
    };
