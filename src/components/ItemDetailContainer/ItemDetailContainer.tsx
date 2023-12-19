import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css';
import axios from 'axios';
import Product from '../../Types/Product';

const ItemDetailContainer = () => {
  const [item, setItem] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get<Product>(`http://localhost:3001/api/products/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
      }
    };
    fetchProductById();
  }, [id]);

  return (
    <div className="main-content">
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
