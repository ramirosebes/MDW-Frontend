import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import LogIn from "./components/LogIn/LogIn";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
    </div>
  );
}

export default App;