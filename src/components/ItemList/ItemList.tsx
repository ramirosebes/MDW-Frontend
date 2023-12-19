// ItemList.tsx
import React from 'react';
import Item from '../Item/Item.tsx';
import './itemList.css'
import Product from '../../Types/Product.ts';

interface ItemListProps {
  products: Product[];
}

const ItemList = ({ products }: ItemListProps) => {
  return (
    <div className='container'>
      <div className='div-title'>
        <h2 className='main-title'>Products</h2>
      </div>
      <div className='products'>
        {products.map((product) => (
          <Item key={product._id} item={product} /> 
        ))}
      </div>
    </div>
  );
};

export default ItemList;
