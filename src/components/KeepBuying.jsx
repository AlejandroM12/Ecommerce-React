
import { Link } from 'react-router-dom';

const KeepBuying = ({handleInter})=> {
    return (
        <>
            <Link to='/'>
                <button
                    onClick={handleInter}
                    className='btn'
                >Seguir Comprando</button>
            </Link>
        </>
    )
}
export default KeepBuying;