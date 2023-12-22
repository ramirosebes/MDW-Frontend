import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './addProduct.module.css';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const token = localStorage.getItem('token');

    const enviar = async (data) => {
        try {
            if (!data.name || !data.description || !data.image || !data.price || !data.stock) {
                console.error('All fields are required');
                return;
            }
            const response = await axios.post('http://localhost:3001/api/products', data, {
                headers: {
                    'authorization': token
                }
            });
            console.log('Product added:', response.data);
            reset();
            setSuccessMessage('¡Product added successfully!');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error adding product:', error);
            setErrorMessage('¡Error adding product!');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Add product</h2>
            <form action="" onSubmit={handleSubmit(enviar)} className={styles.form}>
                <label className={styles.label} htmlFor="inputName">Name:</label>
                <input id="inputName" className={styles.input} type="text" placeholder="Name" {...register('name', { required: true })} />
                {errors.name && <span className={styles.errorText}>¡The name is required!</span>}
                <label className={styles.label} htmlFor="inputImage">Image:</label>
                <input id="inputImage" className={styles.input} type="text" placeholder="Image" {...register('image', { required: true })} />
                {errors.image && <span className={styles.errorText}>¡The image is required!</span>}
                <label className={styles.label} htmlFor="inputPrice">Price:</label>
                <input id="inputPrice" className={styles.input} type="number" placeholder="Price" {...register('price', { required: true })} />
                {errors.price && <span className={styles.errorText}>¡¡The price is required!</span>}
                <label className={styles.label} htmlFor="inputStock">Stock:</label>
                <input id="inputStock" className={styles.input} type="number" placeholder="Stock" {...register('stock', { required: true })} />
                {errors.stock && <span className={styles.errorText}>¡The stock is required!</span>}
                <label className={styles.label} htmlFor="inputDescription">Description</label>
                <textarea id="inputDescription" className={`${styles.input} ${styles.textarea}`} placeholder="Description" {...register('description', { required: true })}></textarea>
                {errors.description && <span className={styles.errorText}>¡The description is required!</span>}
                <button className={styles.button} type="submit">Send</button>
                {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
                {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
            </form>
        </div>
    );
};

export default AddProduct;
