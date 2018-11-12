import React from 'react';

export const SubmitButton = (props) => {
  return (
    <button className={props.className === undefined ? "btn btn-primary form-btn" : props.className + " btn btn-primary form-btn"}>
      <span>{props.title}</span>&nbsp;
       <span>{props.icon}</span>
    </button>
  )
}