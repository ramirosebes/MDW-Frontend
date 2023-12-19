import React, { useState, useEffect } from "react";
import "./admin.css";
import axios from "axios";
import AdminProducts from "../AdminProducts/AdminProducts";
import { Link } from "react-router-dom";
// import AddProduct from "../AddProduct/AddProduct";

const Admin = () => {
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/api/products"
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [products]);

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:3001/api/products/${productId}`, {
                headers: {
                    'Authorization': token
                }
            });
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== productId)
            );
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="adminContainer">
            <div >
                <h2 className="adminTitle">Manage products</h2>
            </div>
            <div className="productsContainer">
                <div className="adminBtnContainer">
                    <Link className="addProduct" to="/admin/addProduct">Add new product</Link>
                </div>
                {products.map((prod) => (<AdminProducts product={prod} key={prod._id} onDelete={handleDeleteProduct} />))}
            </div>
        </div>
    );
};

export default Admin;
