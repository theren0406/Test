import React from 'react';

export default function Input(props) {

  const { label, ...inputProps } = props;

  return (
    <div className="form-group row">
      <label className="col-2 col-form-label">{props.label}</label>
      <div className="col-8">
        <input className="form-control" { ...inputProps } />
      </div>
    </div>
  );
}