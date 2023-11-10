import { Link, useParams } from "react-router-dom";
import Item from "../Item/Item";
import "./styles.css";
import { useEffect, useState } from "react";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

//     const products = [aca van los productos 
//     {
//             title:
//                 price:
//             description:
//                 category:
//             image:
//     },
//         {
//             title:
//                 price:
//             description:
//                 category:
//             image:
// }, {
//             title:
//                 price:
//             description:
//                 category:
//             image:
// }, {
//             title:
//                 price:
//             description:
//                 category:
//             image:
// }, {
//             title:
//                 price:
//             description:
//                 category:
//             image:
// }, {
//             title:
//                 price:
//             description:
//                 category:
//             image:
// }, {
//             title:
//                 price:
//             description:
//                 category:
//             image:
// }, {
//             title:
//                 price:
//             description:
//                 category:
//             image:
// }]

    // new promise para cargar mis propios productos
    // const fetchProducts = new Promise ((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(products);
    //     }, 2000)
    // }) 

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    useEffect(() => {
        const myFunction = async () => {
            if (id) {
                const productList = await fetchProducts();
                const idFormatted = id.includes("-") ? id.replace("-", " ") : id;

                const filterItems = productList.filter((product) => {
                    return product.category === idFormatted;
                });
                setItems(filterItems);
            } else {
                const productList = await fetchProducts();
                setItems(productList);
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

