
import React from 'react'

export const renderTextField = ({input, type, label, meta: {touched, error}, ...custom}) => (  // Define stateless component to render input and errors
  <div>
    <label>{label}</label>
    <input
      type={type}
      {...input}
      {...custom}
    />
    {touched && error && <span className="error">{error}</span>}
  </div>
)