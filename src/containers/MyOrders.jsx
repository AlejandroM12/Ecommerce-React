import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrders.scss';
import flechita from '../assets/img/flechita.svg';
import {  NavLink } from 'react-router-dom';

const MyOrder = () => {
	const {state, totalPrice} = useContext(AppContext);
	// const sumTotal = () => {
	// 	const reducer = (accumulator, currentValue) => accumulator + currentValue.precio;
	// 	const sum = state.cart.reduce(reducer, 0);
	// 	return sum;
	// }
	return (
		<aside className="MyOrder">
			{ state.length > 0 ? ( <>
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">Tu Carrito</p>
			</div>
			<div className="my-order-content">
				{state.map((producto,index) => (
				<OrderItem 
				indexValue={index}
				key={index}
				producto={producto} 
				/>
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalPrice() !== 0 && totalPrice()}</p>
				</div>
				
				<NavLink to='/cart'>
				<button className="primary-button">
					IR A PAGAR
				</button>
				</ NavLink>
			</div>
			</>
			) : (
				<>
				<h2 className='empty-cart-notififaction'>El carrito está vacío</h2>
				</>
			)}
		</aside>
	);
}

export default MyOrder;
