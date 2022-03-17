import "./topbar.css"
const Topbar = () => {
    return (
    <div className="tb">
        <div className="tb-left">
            <p className="tb-text"><img src="img/fast.png" alt="" className="tb-icon"/>¡Envío Gratis a partir de tu compra mayor a $6000,00</p>
            <p className="tb-text"><img src="img/tick.png" alt="" className="tb-icon"/>Aprovechá hasta 3 cutoas sin interés</p>
        </div>
        <div className="tb-right">
            <a href="#" className="tb-link"><img src="img/admin.png" alt="" className="tb-icon"/>Admin</a>
            <a href="#" className="tb-link"><img src="img/instagram.png" alt="" className="tb-icon"/></a>
            <a href="#" className="tb-link"><img src="img/facebook.png" alt="" className="tb-icon"/></a>
        </div>
      </div>
    )
}
export default Topbar;