import React from 'react';

export default function Input(props) {

  const { inputType, label, options, ...inputProps } = props;

  function checkType() {
    switch (props.inputType) {
      case 'input':
      return <input className="form-control" { ...inputProps } />
      case 'textarea':
      return <textarea className="form-control" { ...inputProps } />
      case 'select':
      return (
        <select className="form-control"  { ...inputProps }>
          {options.map((option, idx) => (
					  <option key={idx} value={option}>{option}</option>
          ))}
				</select>
      )
      default:
      break;
    }
  }

  return (
    <div className="form-group">
      <label>{props.label}</label>
      {checkType()}
    </div>
  );
}