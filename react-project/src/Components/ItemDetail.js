import React from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';

const Item = ({id, name, description, price, stock, pictureUrl}) => {
  return (
    <div className='col-md-4 offset-md-4 mb-3'>
        <div className="card" style={{width: "25rem"}}>
            <img src={pictureUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <p>Precio: ${price}</p> 
                    <p>Cantidad en stock: {stock}</p>
                </li>
            </ul>
            <div className="card-body">
                <ItemCount stock={stock} initial={0}/>
            </div>
        </div>
    </div>
  )
}

export default Item