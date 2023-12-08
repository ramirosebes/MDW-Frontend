import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

function Item( {products} ) {
    return (
        <div className='product'>
            <img src={products.image} alt={products.name} />
            <div>
                <h4>{products.name}</h4>
                <p>Price: ${products.price}</p>
                <Link className='view-more' to={`/item/${products._id}`}>View more</Link>
            </div>
        </div>
    )
}

export default Item