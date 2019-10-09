import React from 'react';
import { useSelector } from 'react-redux'

import AdditionalFeature from './AdditionalFeature';


export default () => {

  const store = useSelector(state => state.store)

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};