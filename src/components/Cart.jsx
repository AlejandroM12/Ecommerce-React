import { useContext, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import AppContext from '../context/AppContext';
import  MyOrders from '../containers/MyOrders'



const Cart = () =>{
    

    const [toggleOrders, setToggleOrders] = useState(false);
    const { totalItemQuantity } = useContext(AppContext);

    // const [productsLength, setProductsLength] = useState(0);

    // useEffect(() => {
    //     setProductsLength(
    //         state.cart?.reduce((acum,prod) => acum + prod.cantidad, 0)
    //     );
    //   }, [state.cart]);

    return (
        
        <>
            <BiShoppingBag className="iconCart" onClick={()=>setToggleOrders(!toggleOrders)}>
            </BiShoppingBag>
            {totalItemQuantity() !== 0 && <div className='count'>{totalItemQuantity()}</div>}
            {toggleOrders && <MyOrders />}
        </>

    )
}
export default Cart;