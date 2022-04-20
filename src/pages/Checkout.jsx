import { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import FinishBuying from '../components/FinishBuying'

import '../styles/Checkout.scss';

const Checkout = (producto) => {
	
	const { state, totalPrice } = useContext(AppContext)
	
	// const sumTotal = () => {
	// 	const reducer = (accumulator, currentValue) => accumulator + currentValue.precio;
	// 	const sum = state.cart.reduce(reducer, 0);
	// 	return sum;
	// }


	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>2022</span>
							<span>{state.length} Articles</span>
						</p>
					</div>
				</div>
				{state.map((producto,index) => <OrderItem producto={producto} key={producto.id} indexValue={index}/>)}
				
			</div>
			<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalPrice() !== 0 && totalPrice()}</p>
				</div>
			<div>
				<FinishBuying/>
			</div>
		</div>
	);
}

export default Checkout;
