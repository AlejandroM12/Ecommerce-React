import React, {useEffect, useState} from 'react';
import Item from './ProductItem';
import { productList } from '../containers/databaseProducts.js';

const ItemList = () => {
    const [products, setProducts ] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productList);
        }, 2000);
    });

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
        <div className='product-list-container'>
            {
                products.length ? (
            <>
                    {
                        
                        products.map((product) => {
                            return (
                                <div key={product.id} className="container">
                                    <Item 
                                    
                                        id={product.id}
                                        
                                        imagen={product.imagen}
                                        nombre={product.nombre}
                                        marca={product.marca}
                                        precio={product.precio}
                                        stock={product.stock}
                                       
                                    />
                                </div>
                            );
                        })
                    }
                     </>
                ) : (
                    <p>Cargando productos...</p>
                )
            }
            </div>
    );
    
};

export default ItemList;

