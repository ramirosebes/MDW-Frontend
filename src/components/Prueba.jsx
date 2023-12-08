// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         // Función para obtener todos los productos desde el backend
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get(
//                     "http://localhost:3001/api/products"
//                 );
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         };

//         // Llamamos a la función al montar el componente
//         fetchProducts();
//     }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

//     return (
//         <div>
//             <h2>Product List</h2>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product._id}>{product.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductList;

//-------------------- Prueba --------------------
import React, { useEffect, useState } from "react";
import { getProducts } from "../helper/pedirDatos"; // Ajusta la ruta según tu estructura de carpetas

const ProductList = () => {
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
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
