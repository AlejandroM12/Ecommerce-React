
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

import '../styles/AddToCart.scss'

 const AddCart = (producto) => {
    const { addItemToCart } = useContext(CartContext)
     
    return (
        <button
            className='btn'
            onClick={()=> addItemToCart(producto)}
        >
            Agregar al carrito
        </button>
    )
}
export default AddCart;