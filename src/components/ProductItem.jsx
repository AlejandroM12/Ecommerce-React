import React from 'react';
import ItemCount from './ItemCount';
import '../styles/ProductItem.scss'

const Item = ({id, imagen,nombre,marca,precio, stock}) => {
    // const loadImage = imageName => (require(`../images/${imageName}`).default);
    const add = (quantity) => {
        alert(`Agregaste ${quantity} productos` );
    };
    return (
        <div className="card p-4 col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <img src={imagen}  className="card-img-top " alt={nombre}/>
        <div className="card-body">
            <h5 className="card-title nombre">{nombre}</h5>
            <p className="card-text marca">{marca}</p>
            <p className="card-text precio">${precio}</p>
        </div>
        <ItemCount stock={stock} add={add} countInitial={1}/>
    </div>
    )
}

export default Item;