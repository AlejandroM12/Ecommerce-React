import React from 'react';
import ItemList from '../components/ProductsList.jsx';


const ItemListContainer = () => {
    return (
        <section className='item-list-container'>
            <h2 className='item-list-container__title'>Productos Destacados</h2>
        <ItemList/>
        </section>
    )
}

export default ItemListContainer

