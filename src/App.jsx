import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import LogIn from "./components/LogIn/LogIn";
import Admin from "./components/Admin/Admin";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import NotFound from "./components/NotFound/NotFound";
import Protected from './components/Protected/Protected';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
            <Routes>
            <Route path='/' element={<Protected />}>
              {/* Rutas protegidas */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/editProduct/:id" element={<EditProduct />} />
                         
            </Route>
            {/* Rutas públicas */}
              <Route path="/home" element={<Home />} />
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