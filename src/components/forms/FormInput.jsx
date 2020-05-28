import React, { Component } from "react";

export class FormInput extends Component {
	render() {
		const {
			handleOnChange,
			name,
			type,
			placeholder,
			className,
			value,
			label,
		} = this.props;
		return (
			<div className='form-group'>
				<label htmlFor={name}>{label}</label>
				<input
					id={name}
					name={name}
					type={type}
					placeholder={placeholder}
					onChange={handleOnChange}
					value={value}
					className={className}
				/>
			</div>
		);
	}
}
