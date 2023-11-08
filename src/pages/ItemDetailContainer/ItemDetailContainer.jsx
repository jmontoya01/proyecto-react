import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams();

    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then ((response) => response.json())
            .then ((data) => setProduct(data))
            .catch ((error) => console.error(error))
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="itemDetail">
            <ItemDetail itemSelected={product}/>
        </div>
    );
};

export default ItemDetailContainer;
