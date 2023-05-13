import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <div className="app-container">
      <div className="app-background" />
      <BrowserRouter>
        <CartProvider>
          <ProductProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element= {<ItemListContainer />} />
            <Route path='/category/:categoryId' element= {<ItemListContainer />} />
            <Route path='/item/:itemId' element= { <ItemDetailContainer /> } />
            <Route path='/cart' element= {<Cart/>} />     
            <Route path='/checkout' element= {<Checkout/>} />     
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          </ProductProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
