import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {

	const { label, value, onChange, onBlur, name, required, error } = props;

	const className = `form-control ${ error ? 'is-invalid' : ''}`;
	// touched && 
	return (
		<div className="form-group">
			<label>{label}<span className="required">{required}</span></label>
			<input
				id={name}
				className={className} type="text"
				value={value}
				onChange={(e) => onChange(name, e)}
				onBlur={onBlur}
			/>
			<div className="invalid-feedback">{error}</div>
		</div>
	);
}

Input.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	name: PropTypes.string,
	required: PropTypes.string,
	error: PropTypes.string
};

// class component
Input.defaultProps = {
  label: 'hello'
};