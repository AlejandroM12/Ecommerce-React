import { NavLink } from "react-router-dom";
import shoppingCart from '../assets/img/cart.png';
import '../styles/Button.scss';

const Cart = () =>{
    return (
        

                <NavLink 
                to='/cart'
                className="navbar-shopping-cart cartImg" 
                >
                    <img src={shoppingCart} alt="shopping cart"
                    />
                </NavLink>

    )
}
export default Cart;