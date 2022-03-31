import ItemCount from './ItemCount';
import '../styles/ProductList.scss'

const ItemDetail = ({producto}) => {
  const add = (quantity) => {
    alert(`Agregaste ${quantity} productos` );
};
    return (
        <>
            <article className='sunglass' id={`${producto.id}`}>
                <img src={producto.imagen}  className="sunglass__img" alt={producto.nombre}/>
                <p className="sunglass__name">{producto.marca}</p>
                <span className="sunglass__name">{producto.nombre}</span>
                <span className="sunglass__price">{producto.price}</span>
            </article>
          <ItemCount stock={producto.stock} add={add} countInitial={1}/>
         </>
          
    )
}

export default ItemDetail;