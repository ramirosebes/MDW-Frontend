import React from "react";
import { Link } from "react-router-dom";
import styles from "./adminPorducts.module.css";

const AdminProducts = ({ product, onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(product._id);
    };

    return (
        <div className={styles.container}>
            <div className={styles.productsList}>
                <img src={product.image} alt={product.name} className={styles.image}/>
                <div className={styles.leters}>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.numbers}>
                    <p className={styles.price}>${product.price}</p>
                    <p className={styles.stock}>{product.stock}</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <Link className={styles.edit} to={`/manageProducts/editProduct/${product._id}`}>Edit</Link>
                <button className={styles.delete} onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
};

export default AdminProducts;
