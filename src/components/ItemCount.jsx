import { useState } from "react";
import "../styles/ItemCountStyle.scss";
import '../styles/AddToCart.scss'


const ItemCount = ({countInitial, stock, onAdd}) => {

    const [count, setCount] = useState(countInitial);

    
    const addition  = () => {
        if (count < stock) {
            setCount( count + 1 )
        }
    }
    const subtraction = () => {
        if (count > countInitial) {
            setCount( count - 1 )
        }
    }
    const add = () => {
        onAdd( count )
    }

    

    return (
        <>
                <div className="countMM">
                <button 
                className="countMinus"
                onClick={subtraction}
                disabled={count === countInitial ? true : null}
                >
                    -
                </button>
                <span className="countNumber">{count}</span>
                <button 
                className="countMore"
                onClick={addition}
                disabled={count === stock ? true : null}
                >
                    +
                </button>
                <button
                className='btn'
                onClick={add}

                >
                    Agregar al carrito
                </button>
                </div>
        </>
    )
}

export default ItemCount;

