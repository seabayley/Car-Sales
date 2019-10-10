import React from 'react';
import { useSelector, shallowEqual } from 'react-redux'

export default () => {

  const price = useSelector(state => state.car.price, shallowEqual)
  const additionalPrice = useSelector(state => state.additionalPrice, shallowEqual)

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};
