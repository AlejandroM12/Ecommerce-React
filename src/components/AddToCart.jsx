
import { useContext } from 'react';
import AppContext from '../context/AppContext';

import '../styles/AddToCart.scss'


 const AddCart = ({producto }) => {

    const {addToCart } = useContext(AppContext);
    const handleClick = item => {
		addToCart(item);
	}
    return (
        <button
            className='btn'
            onClick={()=> handleClick(producto) }

        >
            Agregar al carrito
        </button>
    )
}
export default AddCart;