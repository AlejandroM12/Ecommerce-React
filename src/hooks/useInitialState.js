import {useState} from 'react';



const useInitialState = () => {
    const [state, setState] = useState([]);

    const addToCart = (item) => {
        const idX = state.findIndex(prod => item.id === prod.id);
        console.log(idX)
        console.log(item)
        if(idX !== -1){
            const newArray = [...state]
            const newCant = state[idX].cantidad + item.cantidad
            newArray[idX].cantidad = newCant
            setState( newArray )
        }else{
            setState([
                ...state,
                item
            ]);
        }
        
    };

    const removeFromCart = (indexValue) => {
        setState(
            [
                ...state,
            state.filter((prod,index) => index !== indexValue)
        ]
        );
    }
    const totalPrice = () =>{
	 	return state.reduce((acum,prod) => acum + (prod.cantidad * prod.precio), 0);
	 	
    }
    const totalItemQuantity = () => {
        return  state.reduce((acum,prod) => acum += prod.cantidad, 0)
        
    }
    return {
        state,
        addToCart,
        removeFromCart,
        totalPrice,
        totalItemQuantity
    }
}

export default useInitialState;