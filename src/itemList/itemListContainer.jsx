import './itemList.css';


const ItemListContainer = (greeting) => {
    return (
        <div className='itemsL'>   
            <li>Hola, {greeting.name}</li>
        </div>
    )
}

export default ItemListContainer

