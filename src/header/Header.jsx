import './header.css';

const Header = () => {
  return (
    <div className="h">
        <div className="h-flex">
        <div className="h-left">
            <a href="#" className="h-logo">Alejandro Morel</a>
        </div>
        <div className="h-right">
            <ul className="h-ul">
                <li className="h-li">
                    <a href="#" className="h-a"><img src="img/user.png" alt="" className='h-icon' /> Mi Cuenta</a>
                </li>
                <li className="h-li">
                    <a href="#" className="h-a"><img src="img/wishlist.png" alt="" className='h-icon'/> Lista de Deseos</a>
                </li>
                <li className="h-li">
                    <a href="#" className="h-a"><img src="img/cart.png" alt="" className='h-icon'/> Carrito</a>
                </li>
                <li className="h-li">
                    <a href="#" className="h-a"><img src="img/login.png" alt="" className='h-icon'/> Acceso</a>
                </li>
            </ul>
        </div>
        </div>
        <div className="h-center">
            <ul className="h-centerUl">
                <li className="h-centerLi">
                    <a href="#" className="h-centerA">Inicio</a>
                </li>
                <li className="h-centerLi">
                    <a href="#" className="h-centerA">Productos</a>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Header
