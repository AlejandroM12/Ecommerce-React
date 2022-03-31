import React, {useEffect, useState} from 'react';
import Item from './ProductItem';
import { getProducts } from '../containers/databaseProducts.js';
import '../styles/Main.scss'
import '../styles/ProductList.scss'

const ItemList = () => {
    const [products, setProducts ] = useState([]);


    const getProductsFromDB = async () => {
        try {            
            const result = await getProducts;
            setProducts(result);
        }catch(error){
            console.log(error);
            alert('No podemos mostrar los productos en este momento');
        }
    };

    useEffect(()=> {
        getProductsFromDB();
    }, []);
    
    return (
            <section className='featured section'>
                <div className='featured__container bd-grid'>
            {
                products.length ? (
            <>
                    {
                        
                        products.map((product) => {
                            return (
                                
                                    <Item 
                                        key={product.id}
                                        id={product.id}
                                        
                                        imagen={product.imagen}
                                        nombre={product.nombre}
                                        marca={product.marca}
                                        precio={product.precio}
                                        stock={product.stock}
                                       
                                    />
                                
                            );
                        })
                    }
                     </>
                ) : (
                    <p>Cargando productos...</p>
                )
            }       
                    </div>
                </section>
    );
    
};

export default ItemList;

