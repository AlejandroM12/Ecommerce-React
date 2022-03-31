import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getProducts } from "./databaseProducts";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {detalleId} = useParams();
    
    useEffect(() =>{
        getProducts
        .then(resp => setProduct(resp.find(prod => prod.id === detalleId)) )
        .catch(err =>console.log(err))
        //.finally(() setLoading(false))
    }, [detalleId])

    return (
        <>
            <ItemDetail product={product}/>
        </>
    )
}

export default ItemDetailContainer;