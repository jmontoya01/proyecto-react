import { useState, useEffect } from "react"
import ItemList from "../../components/ItemList/ItemList"
import "./styles.css"
import fetchProducts from "../../components/Productos/Productos";

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList ] = useState([])

    // const fetchProducts = () => {
    //         fetch('https://fakestoreapi.com/products')
    //         .then ((response) => response.json())
    //         .then ((data) => setProductList(data))
    //         .catch ((error) => console.error(error))
    //     };

        useEffect(() => {
            setProductList(fetchProducts);
        }, []);

        return (
            <div className="titulo">
                {greeting}
                <ItemList productList={productList} />
            </div>
        );
    };

export default ItemListContainer;
