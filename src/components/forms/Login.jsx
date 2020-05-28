import React, { Component } from "react";

import { isValidEmail, isValidPassword } from "../../utils/validation";

import { FormInput } from "./FormInput";
import { Button } from "../buttons/Button";

import styles from "./Login.module.scss";

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			login_password: "",
			error: {
				email: "",
				password: "",
			},
		};
	}

	handleOnChange = (currentEvent) => {
		const { name, value } = currentEvent.target;
		let error = this.state.error;

		switch (name) {
			case "email":
				error.email = isValidEmail(value) ? "" : "Invalid email";
				break;
			case "password":
				error.password = isValidPassword(value) ? "" : "Invalid password";
				break;
			default:
		}
		this.setState({ error, [name]: value });
	};

	handleOnSubmit = (currentEvent) => {
		currentEvent.preventDefault();
		const { email, password } = this.state;
		const formData = {
			email,
			password,
		};
		console.log(formData);
	};

	render() {
		const { error } = this.state;
		return (
			<div className={styles.Login}>
				<h2>Login In</h2>
				<form onSubmit={this.handleOnSubmit} noValidate>
					<FormInput
						handleOnChange={this.handleOnChange}
						type='email'
						placeholder='email address'
						id='login_email'
						name='email'
						label='email address:'
					/>
					<div>{error.email}</div>
					<FormInput
						handleOnChange={this.handleOnChange}
						type='password'
						placeholder='password'
						id='login_password'
						name='password'
						label='password: '
					/>
					<div>{error.password}</div>
					<Button label='Log In' type='submit' onClick></Button>
				</form>
			</div>
		);
	}
}
