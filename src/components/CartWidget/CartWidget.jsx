import * as Icon from 'react-bootstrap-icons';
import "./styles.css"
import ItemCount from '../ItemCount/ItemCount';

const CartWidget = () => {
    return (
        <div className='CartWidget-container btn btn-dark'>
            <Icon.Cart2 />
            <ItemCount />
        </div>
    )
}

export default CartWidget