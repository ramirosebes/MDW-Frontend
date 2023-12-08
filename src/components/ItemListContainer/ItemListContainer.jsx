import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../helper/pedirDatos";
import "./itemListContainer.css";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [products]);

    // console.log(products);

    return (
        <div className="main-content">
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
