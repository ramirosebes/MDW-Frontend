import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Signup from './pages/Signup';
import Protected from './components/Protected';
import Login from './pages/Login';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Protected />} />
            </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
    </div>
  );
}

export default App;