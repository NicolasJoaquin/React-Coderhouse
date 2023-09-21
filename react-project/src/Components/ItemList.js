import React from 'react'
import Item from './Item'
import ItemListLoader from './ItemListLoader'

const ItemList = ({items}) => {   
    // METER useEffect y meter loader 
    if(items.length == 0)
        return (
            <h2>NO HAY PRODUCTOS</h2>
        )
    else {
        if(items[0] == 'loader')
            return (<ItemListLoader />)
        else {
            return (
                <div className='row'>
                    <h3>Lista de productos</h3>
                    <hr/>
                    {items.map((i) => {
                        // Cuerpo de la función
                        return(
                            <Item key={i.id} id={i.id} name={i.name} description={i.description} price={i.price} stock={i.stock} pictureUrl={i.pictureUrl} />
                        )
                    })}
                </div>
            )
        }
    }
}

export default ItemList