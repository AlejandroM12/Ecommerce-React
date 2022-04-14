import { useState } from "react";
import "../styles/ItemCountStyle.scss";

const ItemCount = ({countInitial, stock}) => {

    const [count, setCount] = useState(countInitial);

    
    const sumar = () => {
        if (count < stock) {
            setCount( count + 1 )
        }
    }
    const restar = () => {
        if (count > countInitial) {
            setCount( count - 1 )
        }
    }




    return (
        <>
                <div className="countMM">
                <button 
                className="countMinus"
                onClick={restar}
                disabled={count === countInitial ? true : null}
                >
                    -
                </button>
                <span className="countNumber">{count}</span>
                <button 
                className="countMore"
                onClick={sumar}
                disabled={count === stock ? true : null}
                >
                    +
                </button>
                </div>
        </>
    )
}

export default ItemCount;

