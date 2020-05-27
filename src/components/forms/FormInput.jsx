import React, { Component } from "react";
import styles from "./FormInput.module.scss";

export class FormInput extends Component {
	render() {
		const {
			handleOnChange,
			name,
			type,
			placeholder,
			onChange,
			className,
			value,
			error,
			// children,
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
				{`errors.${name}`.length > 0 && (
					<div className={styles.error}>{error}</div>
				)}
			</div>
		);
	}
}
