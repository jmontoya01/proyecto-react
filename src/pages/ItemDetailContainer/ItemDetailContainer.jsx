import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import fetchProducts from "../../components/Productos/Productos";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams();


    useEffect(() => {
        fetchProducts()
        .then((data) => {
            const productId = data.find((product) => product.id === Number(id))
            if(productId){
                setProduct(productId)
            }
        })
    }, [id]);

    return (
        <div className="itemDetail">
            <ItemDetail itemSelected={product} />
        </div>
    );
};

export default ItemDetailContainer;
