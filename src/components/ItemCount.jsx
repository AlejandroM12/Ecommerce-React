
import { useState } from "react";
import "../styles/ItemCountStyle.scss";
import AddCart from "./AddToCart";

const ItemCount = ({countInitial, stock, producto}) => {
    const [count, setCount] = useState(countInitial);
    

    const addProduct = (num) => {
        setCount(count + num);
    };

    return (
        <>
            <div className="count-container">
                <div className="countMM">
                <button 
                className="countMinus"
                onClick={()=> addProduct(-1)}
                disabled={count === countInitial ? true : null}
                >
                    -
                </button>
                <span className="countNumber">{count}</span>
                <button 
                className="countMore"
                onClick={()=> addProduct(+1)}
                disabled={count === stock ? true : null}
                >
                    +
                </button>
                
                
                </div>
                <AddCart producto={producto} />
            </div>
        </>
    )
}

export default ItemCount;

