import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';
import Product from '../../Types/Product';
import ItemProps from '../../Types/Item'; 


function Item({ item }: ItemProps) {
  return (
    <div className='product'>
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <Link className='view-more' to={`/item/${item._id}`}>
          View more
        </Link>
      </div>
    </div>
  );
}

export default Item;
