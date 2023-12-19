import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './editProduct.css';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/products/${id}`);

                Object.keys(response.data).forEach(key => {
                    setValue(key, response.data[key]);
                });
            } catch (error) {
                console.error(`Error fetching product with ID ${id}:`, error);
            }
        };
        fetchProductById();
    }, [id, setValue])

    const enviar = async (data) => {
        try {
            const response = await axios.put(`http://localhost:3001/api/products/${id}`, data, {
                headers: {
                    'authorization': token
                }
            });

            console.log('Product edited:', response.data);

            setSuccessMessage('¡Product edited successfully!');

            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);

        } catch (error) {
            console.error('Error editing product:', error);

            setErrorMessage('¡Error editing product!');

            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <div className="divFormEditProduct">
            <h2 className="editProductTitle">Edit product</h2>
            <form action="" onSubmit={handleSubmit(enviar)} className="formEditProduct">

                <label className="editProductLabel" htmlFor="inputName">Name:</label>
                <input id="inputName" className="formInput" type="text" placeholder="Name" {...register('name', { required: true })} />
                {errors.name && <span className="errorText">¡The name is required!</span>}

                <label className="editProductLabel" htmlFor="inputImage">Image:</label>
                <input id="inputImage" className="formInput" type="text" placeholder="Image" {...register('image', { required: true })} />
                {errors.image && <span className="errorText">¡The image is required!</span>}

                <label className="editProductLabel" htmlFor="inputPrice">Price:</label>
                <input id="inputPrice" className="formInput" type="number" placeholder="Price" {...register('price', { required: true })} />
                {errors.price && <span className="errorText">¡The price is required!</span>}

                <label className="editProductLabel" htmlFor="inputStock">Stock:</label>
                <input id="inputStock" className="formInput" type="number" placeholder="Stock" {...register('stock', { required: true })} />
                {errors.stock && <span className="errorText">¡The stock is required!</span>}

                <label className="editProductLabel" htmlFor="inputDescription">Description</label>
                <textarea id="inputDescription" className="formInput textarea" placeholder="Description" {...register('description', { required: true })}></textarea>
                {errors.description && <span className="errorText">¡The description is required!</span>}
                
                <button className="formButton" type="submit">Send</button>
                {successMessage && <div className="successMessage">{successMessage}</div>}
                {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            </form>
        </div>
    );
};

export default EditProduct;
