import axios from "axios";

const baseURL = 'http://localhost:3001/api/products';

export const getProducts = async () => {
    try {
        const response = await axios.get(`${baseURL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${baseURL}/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
        throw error;
    }
};