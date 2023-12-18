import React, { useState, useEffect } from 'react'
// import { getProductById } from '../../helper/pedirDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css';
import axios from "axios";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    //console.log(id)

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/products/${id}`);
                setItem(response.data);
            } catch (error) {
                console.error(`Error fetching product with ID ${id}:`, error);
            }
        };
        fetchProductById();
    }, [id])

    // console.log(item);

    return (
        <div className="main-content">
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer

// useEffect(() => {
//     const fetchProductById = async () => {
//         try {
//             const product = await getProductById(id);
//             setItem(product);
//         } catch (error) {
//             console.log("Error fetching product by id:", error)
//         }
//     };
//     fetchProductById();
// }, [id])