import React from 'react';
import './itemDetail.css';
import Product from '../../Types/Product';
import ItemProps from '../../Types/Item';
interface ItemDetailProps {
  item: Product;
}

const ItemDetail = ({ item }:ItemProps) => {
  return (
    <div className='product-detail'>
      <div className="div-left">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="div-right">
        <h3 className='title'>{item.name}</h3>
        <p className="description">{item.description}</p>
        <p className="stock">Stock: {item.stock}</p>
        <p className="price">Price: ${item.price}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
