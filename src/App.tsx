import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./components/Home/Home.tsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.tsx";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.tsx";
import LogIn from "./components/LogIn/LogIn.tsx";
import Admin from "./components/Admin/Admin.tsx";
import AddProduct from "./components/AddProduct/AddProduct.tsx";
import EditProduct from "./components/EditProduct/EditProduct.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import Protected from "./components/Protected/Protected.tsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />

                    <Route path="/" element={<Protected />}>
                        {/* Rutas protegidas */}
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/admin/addProduct" element={<AddProduct />} />
                        <Route path="/admin/editProduct/:id" element={<EditProduct />} />
                    </Route>

                    {/* Otras rutas públicas */}
                    <Route path="/products/" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
