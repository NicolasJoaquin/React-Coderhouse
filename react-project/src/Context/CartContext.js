import { createContext, useState } from "react";

export const cartContext = createContext([]);

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]); 
    const addProduct = (product) => {
        setCart(...cart, product);
    }
  return (
    <cartContext.Provider value = {{ cart }}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContext