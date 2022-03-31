import { Link } from 'react-router-dom';
import '../styles/Button.scss';
import '../styles/ProductList.scss';

const Item = ({producto }) => {
    // const loadImage = imageName => (require(`../images/${imageName}`).default);
    
    return (
    <article className='sunglass'>
        <img src={producto.imagen}  className="sunglass__img" alt={producto.nombre}/>
            <p className="sunglass__name">{producto.marca}</p>
            <span className="sunglass__name">{producto.nombre} - {producto.categoria}</span>
            <span className="sunglass__price">${producto.precio}</span>
            <Link className='button-light' to={`/detalle/${producto.id}`}>Detalles</Link>
    </article>
    )
}

export default Item;