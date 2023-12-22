import React from "react"
import styles from "./itemDetail.module.css"

const ItemDetail = ( {item} )  => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={item.image} alt={item.name} className={styles.image}/>
            </div>
            <div className={styles.right}>
                <h3 className={styles.title}>{item.name}</h3>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.stock}>Stock: {item.stock}</p>
                <p className={styles.price}>Price: ${item.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail