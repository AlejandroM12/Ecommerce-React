import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { getProducts } from "./databaseProducts";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    
    useEffect(() =>{
        getProducts
        .then(resp => setProduct(resp.find(prod => prod.id === 1)) )
        .catch(err =>console.log(err))
        //.finally(() setLoading(false))
    }, [])

    return (
        <>
            <ItemDetail product={product}/>
        </>
    )
}

export default ItemDetailContainer;