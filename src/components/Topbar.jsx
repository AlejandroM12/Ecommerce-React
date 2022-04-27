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
      </div>
    )
}
export default Topbar;