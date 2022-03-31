import React from 'react';
import ItemList from '../components/ProductsList.jsx';
import '../styles/Main.scss'
import '../styles/Global.scss'


const ItemListContainer = () => {
    return (
        <main className='l-main '>
        <ItemList/>
        </main>
    )
}

export default ItemListContainer

