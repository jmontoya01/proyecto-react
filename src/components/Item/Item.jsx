
import "./styles.css"

const Item = ({ title, description, price, image }) => {
    return (


        <div className='card-container'>
            
            <div>
                <img className="card-image" src={image} alt={title} width={70} />
            </div>
            <h4 className="card-title">{title}</h4>
            <hr />
            <div className="card-description">
                <h5>{description}</h5>
            </div>

            <p>${price}</p>
            <div>

            </div>
        </div>
    )
}

export default Item
