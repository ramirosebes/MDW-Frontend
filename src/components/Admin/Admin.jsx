import React, { useState, useEffect } from 'react'
import './admin.css'
import axios from "axios";
import AdminProducts from "../AdminProducts/AdminProducts";
import { Link } from "react-router-dom";
// import AddProduct from "../AddProduct/AddProduct";

const Admin = () => {
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
        <div className="adminContainer">
            <div className="main-title">
                <h2>Manage products</h2>
            </div>
            <div className="productsContainer">
                <div className="adminBtnContainer">
                    {/* <button className="addProduct">Add new product</button> */}
                    <Link className="addProduct" to="/addProduct">Add new product</Link>
                </div>
                {products.map((prod) => <AdminProducts products={prod} key={prod._id}/>)}
            </div>
        </div>
    )
}

export default Admin