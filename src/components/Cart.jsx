import { useContext, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi'
import AppContext from '../context/AppContext';
import  MyOrders from '../containers/MyOrders'



const Cart = () =>{

    const [toggleOrders, setToggleOrders] = useState(false);
    const {state } = useContext(AppContext);


    return (
        
        <>
            <BiShoppingBag className="iconCart" onClick={()=>setToggleOrders(!toggleOrders)}>
            </BiShoppingBag>
            {state.cart.length > 0 ? <div className='count'>{state.cart.length}</div> : null }
            {toggleOrders && <MyOrders />}
        </>

    )
}
export default Cart;