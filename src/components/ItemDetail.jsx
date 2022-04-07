
import ItemCount from './ItemCount';
import  FinishBuying from './FinishBuying';
import  KeepBuying from './KeepBuying';
import  next from '../assets/img/icon-next.svg' ;
import  previous from '../assets/img/icon-previous.svg' ;
import '../styles/Main.scss'
import '../styles/ProductsDetails.scss'

import { useState } from 'react';





const ItemDetail = ({producto}) => {



const [exchange, setExchange] = useState('button')



const handleInter = () => {
    setExchange('cambia')
}


    return (
        // SECTION SWIPE IMAGEN
        <div className="content">
        <div className="lightbox" id={`${producto.id}`}>
        <img className="product-here" src={producto.imagen} alt={producto.nombre} />
          <div className="previous arrow">
            <img src={previous} alt="icon previous" />
          </div>
          <div className="next arrow">
            <img src={next} alt="icon next" />
          </div>
          <div className="thumb-gallery">
            <div className="pic active">
              <img src={producto.imagen} alt="thumb-1" />
            </div>
            <div className="pic">
              <img src={producto.imagen} alt="thumb-2" />
            </div>
            <div className="pic">
              <img src={producto.imagen} alt="thumb-3" />
            </div>
             <div className="pic">
              <img src={producto.imagen} alt="thumb-4" />
            </div> 
          </div>
          
        </div>

        {/* SECTION PRODUCT DETAILS */}
        <section className="product" id={`${producto.id}`}>
          <div className="company-name">Alejandro Morel company</div>
          <div className="title">{producto.nombre}</div>
          <div className="description">
          {producto.marca}
          </div>
          <div className="price-wrapper">
            <div className="group">
              <div className="price">${producto.precio}</div>
               {/* <div className="discount">10%</div>  */}
            </div>
             {/* <div className="old-price">$250.00</div>  */}
          </div>
            {
                    exchange === 'button' ? 
                    <>
                        <ItemCount stock={producto.stock} countInitial={1} handleInter={handleInter} producto={producto}/>
                        
                    </>
                        
                    :
                    <>
                        <FinishBuying handleInter={handleInter}/>
                        <KeepBuying handleInter={handleInter}/>
                    </>
                }
          </section> 
        </div>
          
    )
}

export default ItemDetail;