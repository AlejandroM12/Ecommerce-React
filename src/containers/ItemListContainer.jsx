
import  {useEffect, useState} from 'react';
import ItemList from '../components/ItemList.jsx';
import { getProducts } from '../containers/databaseProducts.js';
import '../styles/Main.scss'
import '../styles/ProductList.scss'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setproductos ] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoriaId } = useParams();

    useEffect(()=> {
        if(categoriaId){
            getProducts// funcion que simula una api
            // .then(resp =>{ 
            //     //throw new Error('ESto es un error')//instanciando un error
            //     console.log(resp)
            //     return resp
            // })

            .then(resp => setproductos(resp.filter (item => item.categoria === categoriaId)) )
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
        }else{
            getProducts// funcion que simula una api
            // .then(resp =>{ 
            //     //throw new Error('ESto es un error')//instanciando un error
            //     console.log(resp)
            //     return resp
            // })

            .then(resp => setproductos(resp))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
        }
    }, [categoriaId]);
    const getProductsFromDB = async () => {
        try {            
            const result = await getProducts;
            setproductos(result);
        }catch(error){
            console.log(error);
            alert('No podemos mostrar los productos en este momento');
        }
    };
    useEffect( ()=>{
        getProductsFromDB()
    }, [])

   
    
    return (
        <>
            {
                loading ?
                <p>Cargando productos...</p>
                :
                 (
            
                        <ItemList productos={productos}/>       
                ) 
            }    
            </>   
    );
    
};

export default ItemListContainer;

