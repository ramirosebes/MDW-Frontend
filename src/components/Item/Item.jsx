import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./item.module.css"

function Item( {products} ) {
    return (
        <div className={styles.product}>
            <img src={products.image} alt={products.name} className={styles.image}/>
            <div className={styles.detail}>
                <h4>{products.name}</h4>
                <p>Price: ${products.price}</p>
                <Link className={styles.viewMore} to={`/item/${products._id}`}>View more</Link>
            </div>
        </div>
    )
}

export default Item