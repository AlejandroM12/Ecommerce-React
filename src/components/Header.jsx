import { NavLink } from 'react-router-dom';
import menu from '../assets/img/icon_menu.svg'
import logo from '../assets/img/logo.svg';
import '../styles/Header.scss';
import Cart from './Cart';

const Header = () => {
  return (
    <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
             <NavLink to='/'><img src={logo} alt="logo" className="nav-logo" /></NavLink>
                <ul>
                <li>
                        <NavLink to='/categoria/todos' className='a'>Todos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/hombres' className='a'>Hombres</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/mujer' className='a'>Mujer</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categoria/niños' className='a'>Niños</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/Toys' className='a'>Toys</NavLink>
                    </li> */}
                    <li>
                        <NavLink to='/categoria/otros' className='a'>Otros</NavLink>
                    </li>
                </ul>
        </div>
        <Cart/>
    </nav>
  )
}

export default Header
