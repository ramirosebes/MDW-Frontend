import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
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

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;