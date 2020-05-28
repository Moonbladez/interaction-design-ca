import React, { Component } from "react";

import {
	isValidEmail,
	isValidPassword,
	isNotEmpty,
} from "../../utils/validation";

import { FormInput } from "./FormInput";
import { Button } from "../buttons/Button";

import styles from "./CreateAccount.module.scss";

export class CreateAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			create_email: "",
			create_password: "",
			error: {
				first_name: "",
				last_name: "",
				create_email: "",
				create_password: "",
			},
		};
	}

	handleOnChange = (currentEvent) => {
		const { name, value } = currentEvent.target;
		let error = this.state.error;

		switch (name) {
			case "first_name":
				error.first_name = isNotEmpty(value) ? "" : "Can't be empty";
				break;
			case "last_name":
				error.last_name = isNotEmpty(value) ? "" : "Can't be empty";
				break;
			case "create_email":
				error.create_email = isValidEmail(value) ? "" : "Invalid email";
				break;
			case "create_password":
				error.create_password = isValidPassword(value)
					? ""
					: "Invalid password";
				break;
		}
		this.setState({ error, [name]: value });
	};

	handleOnSubmit = (currentEvent) => {
		currentEvent.preventDefault();
		const { first_name, last_name, create_email, create_password } = this.state;
		const formData = {
			first_name,
			last_name,
			create_email,
			create_password,
		};
		console.log(formData);
	};

	render() {
		const { error } = this.state;
		console.log(this.state.error);

		return (
			<div className={styles.CreateAccount}>
				<h2>Create an Account</h2>
				<form onSubmit={this.handleOnSubmit}>
					<FormInput
						handleOnChange={this.handleOnChange}
						type='text'
						placeholder='first name'
						id='first_name'
						name='first_name'
						label='name: '
					/>
					<div>{error.first_name}</div>
					<FormInput
						handleOnChange={this.handleOnChange}
						type='text'
						placeholder='last name'
						id='last_name'
						name='last_name'
						label='last name: '
					/>
					<div>{error.last_name}</div>
					<FormInput
						handleOnChange={this.handleOnChange}
						type='email'
						placeholder='email address'
						id='create_email'
						name='create_email'
						label='email address: '
					/>
					<div>{error.create_email}</div>
					<FormInput
						handleOnChange={this.handleOnChange}
						type='password'
						placeholder='password'
						id='create_password'
						name='create_password'
						label='password: '
					/>
					<div>{error.create_password}</div>
					<div>
						<label htmlFor='checkbox'>Subscribe to Lethea newsletters</label>
						{/* <input type='checkbox' name='checkbox' id='checkbox' checked /> */}
					</div>
					<Button label='Create' type='submit' onClick></Button>
				</form>
			</div>
		);
	}
}
