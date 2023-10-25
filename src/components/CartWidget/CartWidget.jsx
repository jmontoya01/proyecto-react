import * as Icon from 'react-bootstrap-icons';
import "./styles.css"

const CartWidget = () => {
    return (
        <div className='CartWidget-container btn btn-dark'>
            <Icon.Cart2 />
            <div>
                <span>0</span>
            </div>
        </div>
    )
}

export default CartWidget