import './App.css';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle' element={<ItemListContainer />} />

        </Routes>
        <ItemListContainer/>
        <ItemDetailContainer />
        <Cart />
      </BrowserRouter>
    </>
  );
}

export default App;
