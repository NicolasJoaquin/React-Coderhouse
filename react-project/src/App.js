import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ResinasTest from './Components/ResinasTest';
import ResinaTest from './Components/ResinaTest';
import Error404 from './Components/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Test from './Components/Test';
// import CartContext from './Context/CartContext';

function App() {
  // Constantes
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          {/* <Route path='/:category' element={<ItemListContainer products={products}/>} /> */}
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Error404 />} />
          {/* Ejemplo para rutear productos con id */}
          {/* <Route path='/resina/:id/:name' element={<ResinaTest />} /> */}
          {/* Componente para pruebas */}
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
      {/* <CartContext /> */}
    </div>
  );
}

export default App;