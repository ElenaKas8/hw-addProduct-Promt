
import React from 'react';
import css from '../components/ProductItem.module.css';

const ProductItem = ({ name, price, count, onIncrement, onDecrement }) => {
  return (
    <div className={css.product}>
      <p>{name}</p>
      <p>Price: {price}</p>
      <p>
        Count: <button onClick={onIncrement}>+</button> {count} <button onClick={onDecrement}>-</button>
      </p>
    </div>
  );
};

export default ProductItem;
