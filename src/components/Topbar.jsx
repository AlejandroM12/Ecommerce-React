import fast from '../assets/img/fast.png';
import tick from '../assets/img/tick.png';
import "../styles/Topbar.scss"
const Topbar = () => {
    return (
    <div className="tb">
        <div className="tb-left">
            <p className="tb-text"><img src={fast} alt="" className="tb-icon"/>¡Envío Gratis a partir de tu compra mayor a $6000 !</p>
            <p className="tb-text"><img src={tick} alt="" className="tb-icon"/>Aprovechá hasta 3 cutoas sin interés</p>
        </div>
        <div className="tb-right">
            {/* <a href="#" className="tb-link"><img src="img/admin.png" alt="" className="tb-icon"/>Admin</a>
            <a href="#" className="tb-link"><img src="img/instagram.png" alt="" className="tb-icon"/></a>
            <a href="#" className="tb-link"><img src="img/facebook.png" alt="" className="tb-icon"/></a> */}
        </div>
      </div>
    )
}
export default Topbar;