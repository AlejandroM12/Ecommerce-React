import {useState} from 'react';

const initialState = {
    cart: [],
}

const UseInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (item) => {
        const idX = state.cart.findIndex(prod => item.id === prod.id);
        console.log(idX)
        console.log(item)
        if(idX !== -1){
            const newArray = state.cart
            const newCant = state.cart[idX].cantidad + item.cantidad
            newArray[idX].cantidad = newCant
            setState( [...newArray] )
        }else{
            setState({
                ...state,
                cart: [...state.cart, item]
            });
        }
        
    };

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((prod,index) => index !== indexValue),
        });
    }
    const totalPrice = () =>{
	 	return state.cart.reduce((acum,prod) => acum + (prod.cantidad * prod.precio), 0);
	 	
    }
    const totalItemQuantity = () => {
        return  state.cart.reduce((acum,prod) => acum += prod.cantidad, 0)
        
    }
    return {
        state,
        addToCart,
        removeFromCart,
        totalPrice,
        totalItemQuantity
    }
}

export default UseInitialState;