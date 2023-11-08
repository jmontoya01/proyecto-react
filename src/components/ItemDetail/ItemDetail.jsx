import ItemCount from "../ItemCount/ItemCount";
import "./styles.css"

const ItemDetail = ({itemSelected}) => {
    return ( 
    <div className="container align-items-center">
        <div className="card-containerr">
            <h6 className="card-titlee" >{itemSelected?.title}</h6>
            <img className="card-imagee" src={itemSelected?.image} alt={itemSelected?.title} width={70} />
            
            <div className="card-descriptionn">
                <p>{itemSelected?.description}</p>
            </div>
            <p>${itemSelected?.price}</p>
            <ItemCount />
        </div>
    </div>
    );
};

export default ItemDetail
