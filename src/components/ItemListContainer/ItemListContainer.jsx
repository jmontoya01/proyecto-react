import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./styles.css"

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList ] = useState([])

    const fetchProducts = () => {
            fetch('https://fakestoreapi.com/products')
            .then ((response) => response.json())
            .then ((data) => setProductList(data))
            .catch ((error) => console.log(error))
        };

        useEffect(() => {
            fetchProducts();
        }, []);

        return (
            <div className="titulo">
                {greeting}
                <ItemList productList={productList} />
            </div>
        );
    };

export default ItemListContainer;
