import React from 'react'
import './CartWidget.css';

const CartWidget = () => {
    const inlineStyle = {
        width: 30, 
        height: 30
    }
  return (
    <div>
        <span>0</span> 
        <i style={inlineStyle} className="bi bi-cart-check"></i>
    </div>
  )
}

export default CartWidget