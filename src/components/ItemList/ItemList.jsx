import { Link, useParams } from "react-router-dom";
import Item from "../Item/Item";
import "./styles.css";
import { useEffect, useState } from "react";
import fetchProducts from "../Productos/Productos";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const myFunction = async () => {
            try {
                const productList = await fetchProducts();

                if (id) {
                    const filterItems = productList.filter((product) => {
                        return product.category === id;
                    });
                    setItems(filterItems);
                } else {
                    setItems(productList);
                }
            } catch (error) {
                console.error(error);
                setItems([]);
            }
        };

        myFunction();
    }, [id]);

    return (
        <div className="item-list-container">
            {items.map((item) => (
                <Link className="stylesLink" to={"/item/" + item.id} key={item.id}>
                    <Item
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ItemList;
