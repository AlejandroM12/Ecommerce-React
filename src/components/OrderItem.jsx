import React, {useContext} from 'react';
import { CartContext } from '../context/cartContext';
import { BiX } from "react-icons/bi";
import '../styles/OrderItem.scss';

const OrderItem = (producto) => {

	const { deleteItemCart } = useContext(CartContext);
	const { cantidad } = producto;
	return (
		<div className='cartItem'>
			<img src={producto.imagen} alt={producto.nombre} />
			<div className="dataContainer">
				<div className="left">
					<p>{producto.name}</p>
				<div className='buttons'>
				<BiX onClick={()=> deleteItemCart(producto.id, cantidad)}/>
				</div>
				</div>
			<div>
				<div className='right'>
					<div>{producto.cantidad}</div>
					<p>Total: ${producto.cantidad * producto.price}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderItem;
