import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import LogIn from "./components/LogIn/LogIn";
import Admin from "./components/Admin/Admin";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import NotFound from "./components/NotFound/NotFound";
import Protected from "./components/Protected/Protected";

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
