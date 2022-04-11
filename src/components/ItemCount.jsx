
import { useState } from "react";
import "../styles/ItemCountStyle.scss";

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
            </div>
        </>
    )
}

export default ItemCount;

