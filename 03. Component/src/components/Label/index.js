import React from 'react';

const componentName = (props) => {
  const {number} = props;
  return (
    <div>
      <span className='counter'>{!number ? 'Counter' : number}</span>
    </div>
  );
};

export default componentName;