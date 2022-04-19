
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

 const FinishBuying =({handleInter}) => {
     const { state } = useContext(AppContext)
   
     const totalPrice = () => {
         return state.cart.reduce((acum, prod) => acum + (prod.cantidad * prod.precio), 0)
     }
     const generateOrder= (e) => {
         e.preventDefault();

         let order = {}
        order.buyer = { name: 'Alejandro', email: 'a@gmail.com', phone: '123123123'}
        order.total = totalPrice()
   
        order.items = state.cart.map( cartItem => {
            const id = cartItem.id
            const name = cartItem.nombre
            const price = cartItem.precio * cartItem.cantidad
   
            return {id, name, price}
        })
        console.log(order);
     }
    
    return (
        <>
            <Link to='/cart'>
                <button
                    className='btn'
                    onClick={generateOrder}
                >Terminar mi compra</button>
            </Link>
        </>
    )
}
export default FinishBuying;