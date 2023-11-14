import * as Icon from 'react-bootstrap-icons';
import "./styles.css"
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
    const navigate = useNavigate();
    const handleNavigationCart = () => {
        navigate('/cart')
    }   
    return (
        <div className='CartWidget-container btn btn-dark'>
            <Icon.Cart2 onClick={handleNavigationCart} />
            <span>0</span>
        </div>
    )
}

export default CartWidget