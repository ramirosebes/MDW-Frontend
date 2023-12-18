import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Protected from './components/Protected';
import NotFound from './components/NotFound/NotFound';
import Login from './components/LogIn/Login';

function App() {
  return (
    <div>
        {/*<BrowserRouter>
          <Navbar />
            <Routes>
            <Route path='/' element={<Protected/>}>
                  <Route path='home' element={<Home/>}/>
            </Route>
            <Route path="products" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="login" element={<Login />} />      
                
            


            </Routes>
        </BrowserRouter>
  */}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Protected />}>
              {/* Rutas protegidas */}
              <Route path='home' element={<Home />} />             
            </Route>

            {/* Rutas públicas */}
            <Route path='products' element={<ItemListContainer />} />
            <Route path='item/:id' element={<ItemDetailContainer />} />
            <Route path='login' element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;