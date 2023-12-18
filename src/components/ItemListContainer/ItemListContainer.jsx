import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
// import { getProducts } from "../../helper/pedirDatos";
import "./itemListContainer.css";
import axios from "axios";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [products]);

    // console.log(products);

    return (
        <div className="itemListContainer-container">
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;

// useEffect(() => {
//     const fetchProducts = async () => {
//         try {
//             const productsData = await getProducts();
//             setProducts(productsData);
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };
//     fetchProducts();
// }, [products]);