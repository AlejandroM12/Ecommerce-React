import ItemCount from './ItemCount';

const ItemDetail = ({product,stock}) => {
  const add = (quantity) => {
    alert(`Agregaste ${quantity} productos` );
};
    return (
        <>
            <article className='sunglass' id={`${product.id}`}>
                <img src={product.imagen}  className="sunglass__img" alt={product.nombre}/>
                <p className="sunglass__name">{product.marca}</p>
                <span className="sunglass__name">{product.nombre}</span>
                <span className="sunglass__price">{product.price}</span>
            </article>
          <ItemCount stock={stock} add={add} countInitial={1}/>
         </>
          
    )
}

export default ItemDetail;