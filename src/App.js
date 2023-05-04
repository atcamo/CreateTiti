import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
          <Route path='/' element= {<ItemListContainer />} />
            <Route path='/category/:categoryId' element= {<ItemListContainer />} />
            <Route path='/item/:itemId' element= { <ItemDetailContainer /> } />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
