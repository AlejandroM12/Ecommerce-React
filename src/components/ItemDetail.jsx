
const ItemDetail = ({product}) => {
    return (
            <div class="content">
                <section className="lightbox">
                <img className="product-here" src={product.imagen} alt={product.nombre} />
                </section>
                
                <section class="product">
          <div class="company-name">Alejandro Morel company</div>
          <div class="title">{product.nombre}</div>
          <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia ut quisquam aperiam expedita. Repellat voluptatum porro maxime sint expedita nemo rerum, exercitationem architecto fugit.
          </div>
          <div class="price-wrapper">
            <div class="group">
              <div class="price">{product.price}</div>
            </div>
          </div>

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