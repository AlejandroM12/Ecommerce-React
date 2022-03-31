import { Link, NavLink } from "react-router-dom";
import shoppingCart from '../assets/img/cart.png';
import '../styles/Button.scss';

const Cart = () =>{
    return (
        <div className="navbar-right">
            <ul>
                <Link to="/" className="navbar-email">
                    alejandro@example.com
                </Link>
                <NavLink 
                to='/cart'
                className="navbar-shopping-cart cartImg" 
                >
                    <img src={shoppingCart} alt="shopping cart"
                    />
                </NavLink>
            </ul>
        </div>
    )
}
export default Cart;