import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './addProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const token = localStorage.getItem('token');

    const enviar = async (data) => {
        try {
            // Validar que los campos no estén vacíos antes de enviar la solicitud
            if (!data.name || !data.description || !data.image || !data.price || !data.stock) {
                console.error('All fields are required');
                return;
            }

            // Realizar la solicitud POST a la API
            const response = await axios.post('http://localhost:3001/api/products', data, {
            headers: {
                'authorization': token
            }
        });

            // Hacer algo con la respuesta (por ejemplo, imprimir en la consola)
            console.log('Product added:', response.data);

            // Vaciar los campos después de enviar el formulario
            reset();

            // Mostrar el mensaje de éxito
            setSuccessMessage('¡Product added successfully!');

            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            // Manejar errores de la solicitud (por ejemplo, imprimir en la consola)
            console.error('Error adding product:', error);
            setErrorMessage('¡Error adding product!');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <div className="divFormAddProduct">
            <form action="" onSubmit={handleSubmit(enviar)} className="formAddProduct">
                <label className="AddProductLabel" htmlFor="inputName">Name:</label>
                <input id="inputName" className="formInput" type="text" placeholder="Name" {...register('name', { required: true })} />
                {errors.name && <span className="errorText">¡The name is required!</span>}
                <label className="AddProductLabel" htmlFor="inputImage">Image:</label>
                <input id="inputImage" className="formInput" type="text" placeholder="Image" {...register('image', { required: true })} />
                {errors.image && <span className="errorText">¡The image is required!</span>}
                <label className="AddProductLabel" htmlFor="inputPrice">Price:</label>
                <input id="inputPrice" className="formInput" type="number" placeholder="Price" {...register('price', { required: true })} />
                {errors.price && <span className="errorText">¡¡The price is required!</span>}
                <label className="AddProductLabel" htmlFor="inputStock">Stock:</label>
                <input id="inputStock" className="formInput" type="number" placeholder="Stock" {...register('stock', { required: true })} />
                {errors.stock && <span className="errorText">¡The stock is required!</span>}
                <label className="AddProductLabel" htmlFor="inputDescription">Description</label>
                <textarea id="inputDescription" className="formInput textarea" placeholder="Description" {...register('description', { required: true })}></textarea>
                {errors.description && <span className="errorText">¡The description is required!</span>}
                <button className="formButton" type="submit">Send</button>
                {successMessage && <div className="successMessage">{successMessage}</div>}
                {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            </form>
        </div>
    );
};

export default AddProduct;
