import ItemCount from "../ItemCount/ItemCount";
import "./styles.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({itemSelected}) => {
    const [count, setCount] = useState(0);
    const stock = 5
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/cart')
    };

    return ( 
    <div className="container align-items-center">
        <div className="card-containerr">
            <h6 className="card-titlee" >{itemSelected?.title}</h6>
            <img className="card-imagee" src={itemSelected?.image} alt={itemSelected?.title} width={70} />
            
            <div className="card-descriptionn">
                <p>{itemSelected?.description}</p>
            </div>
            <p className="price">${itemSelected?.price}</p>
            <p >Stock: {stock}</p>
            <div>
                <button className="card-button" onClick={handleNavigation}>Terminar compra</button>
            </div>
            <ItemCount count={count} setCount={setCount} stock={stock} />
        </div>
    </div>
    );
};

export default ItemDetail
