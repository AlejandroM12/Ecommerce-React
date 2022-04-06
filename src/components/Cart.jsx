import { NavLink } from "react-router-dom";
import { BiShoppingBag } from 'react-icons/bi'

const Cart = () =>{
    return (
        
        <>
                <NavLink 
                to='/cart'
                >
                    <BiShoppingBag className="iconCart"/>
                </NavLink>
                </>

    )
}
export default Cart;