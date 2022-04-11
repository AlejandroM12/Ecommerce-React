
import { useState } from "react";
import "../styles/ItemCountStyle.scss";

const ItemCount = ({countInitial, stock, producto}) => {
    const [count, setCount] = useState(countInitial);
    

    const addProduct = (num) => {
        setCount(count + num);
    };

    return (
        <>
                <div className="countMM">
                <button 
                className="countMinus"
                onc
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
        </>
    )
}

export default ItemCount;

