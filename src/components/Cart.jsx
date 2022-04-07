
import { useContext, useEffect, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
// import { BiChevronLeft } from 'react-icons/bi';
// import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import '../styles/Cart.scss';
import '../styles/Header.scss';
 import OrderItem from './OrderItem';

const Cart = () =>{

    const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);
    
    const { cartItems } = useContext(CartContext);

    useEffect(()=>{
        setProductsLength(
            cartItems?.reduce((previous, current) => previous + current.cantidad, 0)
        );
    }, [cartItems]);

    const total = cartItems?.reduce(
        (previous, current) => previous + current.cantidad * current.precio,
        0);
 

    return (
        <div className="cartContainer">
        <div
          onClick={() =>setCartOpen(!cartOpen)}
          className="buttonCartContainer"
        >
          <div className="buttonCart">
            {!cartOpen ? (
              <BiShoppingBag className='open'/>
            ) : (
                <BiShoppingBag />
            )}
          </div>
          {!cartOpen && (
            <div className="productsNumber">{productsLength}</div>
          )}
        </div>
  
        {cartItems && cartOpen && (
          <div className='cart'>
            <h2>Tu carrito</h2>
  
            {cartItems.length === 0 ? (
              <p className="cartVacio">Tu carrito esta vacio</p>
            ) : (
              <div className='productsContainer'>
                {cartItems.map((producto, i) => (
                  <OrderItem key={i} producto={producto} />
                ))}
              </div>
            )}
  
            <h2 className='total'>Total: ${total}</h2>
          </div>
        )}
      </div>
    );
};
export default Cart;