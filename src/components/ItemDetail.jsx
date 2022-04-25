import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import ItemCount from './ItemCount';
import  KeepBuying from './KeepBuying';
import  next from '../assets/img/icon-next.svg' ;
import  previous from '../assets/img/icon-previous.svg' ;
import '../styles/Main.scss'
import '../styles/ProductsDetails.scss'
import "../styles/ItemCountStyle.scss";


const ItemDetail = ({producto}) => {

const [exchange, setExchange] = useState('button-fw')
const {addToCart } = useContext(AppContext)

const onAdd =  (cant) =>{
   addToCart( { ...producto, cantidad: cant } )
}
const handleInter = () => {
    setExchange('change')
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
                    exchange === 'button-fw' ? 
                    
                    <div className="productActions">
                        <ItemCount producto={producto} key={producto.id} onAdd={onAdd} stock={producto.stock} countInitial={1} handleInter={handleInter} />
                    </div>
                        
                    :
                    <div className="productActions">
                        <Link to='/cart'>
                            <button
                                className='button-fw'
                                onClick={handleInter}
                            >Terminar mi compra</button>
                        </Link>
                        <KeepBuying handleInter={handleInter}/>
                    </div>
                }
          </section> 
        </div>
          
    )
}

export default ItemDetail;