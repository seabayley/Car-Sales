import React from 'react';

import { ADD_FEATURE } from '../actions'
import { useDispatch } from 'react-redux'

const AdditionalFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      <button className="button" onClick={() => dispatch({ type: ADD_FEATURE, payload: props.feature })}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature