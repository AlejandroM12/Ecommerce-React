
import { useState } from "react";
import "./itemCountStyle.css";

const ItemCount = (props) => {
    let stock = 15;
    let countInitial = 1;
    const [count, setCount] = useState(countInitial);

    return (
        <>
            <div className="count-container">
                <div className="countMM">
                <button 
                className="countMinus"
                onClick={()=> { setCount(prevCounter => prevCounter -= 1)}}
                disabled={count === countInitial ? true : null}
                >
                    -
                </button>
                <span className="countNumber">{count}</span>
                <button 
                className="countMore"
                onClick={()=> { setCount(prevCounter => prevCounter += 1)}}
                disabled={count === stock ? true : null}
                >
                    +
                </button>
                </div>
                
                <button 
                className="btn-primary"
                onClick={()=> alert(`Agregaste ${count} productos`)}
                disabled={stock === 0 ? true : null}
                >
                    Añadir
                </button>
            </div>
        </>
    )
}

export default ItemCount;

