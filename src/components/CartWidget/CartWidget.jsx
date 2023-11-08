import * as Icon from 'react-bootstrap-icons';
import "./styles.css"


const CartWidget = () => {
    return (
        <div className='CartWidget-container btn btn-dark'>
            <Icon.Cart2 />
            <span>0</span>
        </div>
    )
}

export default CartWidget