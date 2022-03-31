import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.scss';
import '../styles/ProductList.scss';

const Item = ({id, imagen,nombre,marca,precio}) => {
    // const loadImage = imageName => (require(`../images/${imageName}`).default);
    
    return (
    <article className='sunglass'>
        <img src={imagen}  className="sunglass__img" alt={nombre}/>
            <p className="sunglass__name">{marca}</p>
            <span className="sunglass__name">{nombre}</span>
            <span className="sunglass__price">${precio}</span>
            <Link className='button-light' to={`/producto/${id}`}>Detalles</Link>
    </article>
    )
}

export default Item;