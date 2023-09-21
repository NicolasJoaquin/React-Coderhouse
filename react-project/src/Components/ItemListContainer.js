import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import FetchData from './FetchData';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
const ItemListContainer = ({greeting, products}) => {
  // Funciones y promesas
  const getProduct = (id) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              let found = products.find(p => p.id == id );
              if(found !== undefined)
                  resolve(found);
              else
                  reject(new Error("No hay producto con ese id"));
          }, 1500);
      });
  }
  async function getProductAwait(id) {
    try {
      let p = await getProduct(id);
      console.log("Producto: ", p);
    }
    catch(err) {
      console.log(err.message)
    }
  }
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      const productsFiltered = products.filter((p) => {
        if(category != undefined && p.category == category) {
          return p
        }
        if(categoryId != undefined && p.categoryId == categoryId) {
          return p
        }
      })
      let newProducts = [];
      console.log(productsFiltered.length);
      if(category == undefined && categoryId == undefined)
        newProducts = products
      else
        newProducts = productsFiltered
      setTimeout(() => {
        resolve(newProducts);
        // reject(new Error("No hay producto con ese id"));
      }, 2000);
    });
  }
  async function mock() {
    try {
      let p = await getProducts();
      console.log("Productos: ", p);
      setActualProducts(p);
    }
    catch(err) {
      console.log(err.message)
    }
  }
  // Hooks
  const {category, categoryId} = useParams();
  const [actualProducts, setActualProducts] = useState(['loader']);
  useEffect(() => {
    mock();
    // Función de limpieza
    return () => setActualProducts(['loader'])
  }, [products, category, categoryId])
  return (
    <div>
        <h2>{greeting}</h2>
        {/* <button className="btn btn-lg btn-primary mb-3" onClick={() => mock()}>Obtener productos</button> */}
        {/* <button className="btn btn-lg btn-primary mb-3" onClick={() => getProductAwait(10)}>Obtener producto</button> */}
        {/* <FetchData/> */}
        {/* <FetchData/> */}
        {/* <ItemCount stock={10} initial={1}/> */}
        <ItemList items={actualProducts}/>
    </div>
  )
}

export default ItemListContainer