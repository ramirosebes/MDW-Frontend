import React from "react";
import Item from "../Item/Item";
import styles from "./itemList.module.css";

function ItemList({ products }) {
    return (
        <div className={styles.container}>
            <div className={styles.div}>
                <h2 className={styles.title}>Products</h2>
            </div>
            <div className={styles.products}>
                {products.map((prod) => <Item products={prod} key={prod._id} />)}
            </div>
        </div>
    )
}

export default ItemList