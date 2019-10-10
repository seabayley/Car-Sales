import React from 'react';

import { REMOVE_FEATURE } from '../actions'
import { useDispatch } from 'react-redux'

const AddedFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      <button className="button" onClick={() => dispatch({ type: REMOVE_FEATURE, payload: props.feature })}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature