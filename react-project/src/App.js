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
import glitter from './glitter-stich.jpg';
import abcGrande from './molde-abc-grande.jpg';
import plenoMarfil1 from './pleno-marfil-40cc-1.jpg';
import plenoMarfil2 from './pleno-marfil-40cc-2.jpg';
import quitaburbujas from './quitaburbujas-100.jpg';
import estandar750 from './resina-estandar-750.jpg';
import estandar1500 from './resina-estandar-1500.jpg';
import estandar300 from './resina-estandar-300.jpg';
// import CartContext from './Context/CartContext';

function App() {
  // Constantes
  const products = [
    /* Agregar variantes de colores y/o empaques */
    {
      id: 1,
      name: 'Resina estándar 300 gr.',
      description: 'Def. estándar',
      pictureUrl: estandar300,
      price: 300,
      stock: 10,
      category: "resinas",
      categoryId: 1,
    },
    {
      id: 3,
      name: 'Pigmento 40 cc.',
      description: 'Pigmento pleno',
      pictureUrl: plenoMarfil1, // Convertir en array
      price: 500,
      stock: 15,
      category: "pigmentos",
      categoryId: 2,
    },
    {
      id: 4,
      name: 'Resina estándar 750 gr.',
      description: 'Def. estándar',
      pictureUrl: estandar750,
      price: 1500,
      stock: 15,
      category: "resinas",
      categoryId: 1,
    },
    {
      id: 5,
      name: 'Resina estándar 1,5 kg.',
      description: 'Def. estándar',
      pictureUrl: estandar1500,
      price: 3000,
      stock: 15,
      category: "resinas",
      categoryId: 1,
    },
    {
      id: 6,
      name: 'Resina Glass Fluent 300 gr.',
      description: 'Def. Glass Fluent',
      pictureUrl: estandar300,
      price: 900,
      stock: 15,
      category: "resinas",
      categoryId: 1,
    },
    {
      id: 7,
      name: 'Resina Glass Fluent 750 gr.',
      description: 'Def. Glass Fluent',
      pictureUrl: estandar750,
      price: 2000,
      stock: 15,
      category: "resinas",
      categoryId: 1,
    },
    {
      id: 8,
      name: 'Resina Glass Fluent 1,5 kg.',
      description: 'Def. Glass Fluent',
      pictureUrl: estandar1500,
      price: 4000,
      stock: 15,
      category: "resinas",
      categoryId: 1,
    },
    {
      id: 9,
      name: 'Molde ABC grande',
      description: 'Molde de silicona',
      pictureUrl: abcGrande,
      price: 1000,
      stock: 15,
      category: "moldes",
      categoryId: 4,
    },
    {
      id: 10,
      name: 'Quitaburbujas 100 cc.',
      description: 'Alcohol isopropílico',
      pictureUrl: quitaburbujas,
      price: 550,
      stock: 15,
      category: "accesorios",
      categoryId: 5,
    },
    {
      id: 2,
      name: 'Glitter 10 gr.',
      description: 'Glitter trama fina',
      pictureUrl: glitter,
      price: 100,
      stock: 20,
      category: "glitters",
      categoryId: 3,
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Estamos trabajando en nuestro catálogo' products={products} />} />
          {/* <Route path='/:category' element={<ItemListContainer products={products}/>} /> */}
          <Route path='/category/:categoryId' element={<ItemListContainer products={products}/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer products={products}/>} />
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
