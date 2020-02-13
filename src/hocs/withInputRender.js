import React from 'react';

export const withInputRender = Wrapper => ({input, label, children, meta, ...props}) => {
  return (
    <label>
      <div>{label}</div>
      <Wrapper {...input} {...props} children={children}/>
      {meta.touched && meta.error && <span style={{color:'red'}}>{meta.error}</span>}
    </label>
  );
};