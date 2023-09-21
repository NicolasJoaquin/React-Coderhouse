import React from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';

const Item = ({id, name, description, price, stock, pictureUrl}) => {
  return (
    <div className='col-sm-4 mb-3 text-center'>
        <div className="card" style={{width: "25rem"}}>
            <img src={pictureUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: ${price}</li>
                <li className="list-group-item">Cantidad en stock: {stock}</li>
                <li className="list-group-item"><Link to={"/item/" + id} className='btn btn-md btn-outline-primary'>Ver detalle</Link></li>
            </ul>
            <div className="card-body">
                <ItemCount stock={stock} initial={0}/>
            </div>
        </div>
    </div>
  )
}

export default Item


/* *
el a

*/