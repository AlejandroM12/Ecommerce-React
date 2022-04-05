
import { Link } from 'react-router-dom';

 const FinishBuying =({handleInter}) => {
    return (
        <>
            <Link to='/cart'>
                <button
                    className='btn'
                    onClick={handleInter}
                >Terminar mi compra</button>
            </Link>
        </>
    )
}
export default FinishBuying;