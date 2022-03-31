import ItemCount from './ItemCount';

const ItemDetail = ({product,stock}) => {
  const add = (quantity) => {
    alert(`Agregaste ${quantity} productos` );
};
    return (
            <div className="content">
                <section className="lightbox">
                <img className="product-here" src={product.imagen} alt={product.nombre} />
                </section>
                
                <section className="product">
                  
          <div className="company-name">Alejandro Morel company</div>
          <div className="title">{product.nombre}</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia ut quisquam aperiam expedita. Repellat voluptatum porro maxime sint expedita nemo rerum, exercitationem architecto fugit.
          </div>
          <div className="price-wrapper">
            <div className="group">
              <div className="price">{product.price}</div>
            </div>
          </div>
          <ItemCount stock={stock} add={add} countInitial={1}/>
          {/* <div class="count-btn-group">
            <div class="counter-wrapper">
              <img id="btnMinus" src="./images/icons/icon-minus.svg" alt="icon minus" />
              <div class="counter">1</div>
              <img id="btnPlus" src="./images/icons/icon-plus.svg" alt="icon plus" />
            </div>


                <div class="btn">
                  <img src="./images/icons/icon-cart.svg" alt="icon cart" />
                  <p>Agregar al Carrito</p>
                </div>
              </div> */}
          </section>
            </div>
    )
}

export default ItemDetail;