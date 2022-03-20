import ItemCount from '../itemCount/itemCount';
import './itemList.css';


const ItemListContainer = (greeting) => {
    return (
        <div className='itemsL'>   
            <li>Zapatilla {greeting.name}</li>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer

