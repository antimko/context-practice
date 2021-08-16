import React, { useContext } from 'react';
import ItemContext from './store/ItemContext';

const CartItem = (props) => {
  const context = useContext(ItemContext);
  return (
    <p>
      <div className='curren-curt'>
        <h6>
          Item: {props.item.title} - price {props.item.price} eur{' '}
        </h6>

        <h6>Dscount: {context.discount}%</h6>
      </div>
      <button onClick={context.applyDiscount}>Apply discount to all</button>
    </p>
  );
};
export default CartItem;
