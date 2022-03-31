import { Link } from "react-router-dom";
import shoppingCart from '../assets/img/cart.png';
import '../styles/Button.scss';

const Cart = () =>{
    return (
        <div className="navbar-right">
            <ul>
                <Link to="/" className="navbar-email">
                    alejandro@example.com
                </Link>
                <Link 
                to='/cart'
                className="navbar-shopping-cart cartImg" 
                >
                    <img src={shoppingCart} alt="shopping cart"
                    />
                </Link>
            </ul>
        </div>
    )
}
export default Cart;