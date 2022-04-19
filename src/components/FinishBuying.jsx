
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import AppContext from '../context/AppContext';

 const FinishBuying =({handleInter}) => {
     const { state } = useContext(AppContext)
   
     const totalPrice = () => {
         return state.cart.reduce((acum, prod) => acum + (prod.cantidad * prod.precio), 0)
     }
     const generateOrder= async (e) => {
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
         // creación de un documento
         const db = getFirestore() 
         const queryCollection = collection(db, 'orders')
         await addDoc(queryCollection, order)
        .then(({id}) => console.log( id ))
        .catch((err) => console.log(err))
        .finally(() => console.log('actulalizado'));

        // UPDATE, MODIFICAR UN ARCHIVO

            // const queryUpdate =  doc(db, 'productos', '66jKSAod52FJ14UY4ShV')
            // updateDoc(queryUpdate, {
            //     stock : 50
            // })
            // .then(resp => console.log('actualizado'))

        // ACTUALIZAR STOCK DE DIFERENTES PRODUCTOS

            const queryCollectionStock = collection(db, 'productos')

            const queryUpdateStock = await query(
                queryCollectionStock,
                where( documentId() , 'in', state.cart.map(it => it.id ) )
            )
                
            const batch = writeBatch(db)

            await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - state.cart.find(item => item.id === res.id).cantidad
            }) ))
            .finally( ()=> console.log('actualizado'))

            batch.commit()

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