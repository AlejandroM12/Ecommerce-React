
 import '../styles/AddToCart.scss'
 const AddCart = ({handleInter}) => {
    return (
        <button
            className='btn'
            onClick={handleInter}
        >
            
            Agregar al carrito
        </button>
    )
}
export default AddCart;