import React, { Component } from "react";

import { FormInput } from "./FormInput";
import { Button } from "../buttons/Button";

export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login_email: "",
			login_password: "",
			login_emailError: "",
			login_passwordError: "",
		};
	}

	handleOnChange = (currentEvent) => {
		console.log(currentEvent.target.value);

		this.setState({ [currentEvent.target.name]: currentEvent.target.value });
	};

	handleOnSubmit = (currentEvent) => {
		currentEvent.preventDefault();
	};

	render() {
		return (
			<div>
				<h2>Login In</h2>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleOnChange={this.handleOnChange}
						type='email'
						placeholder='email address'
						id='login_email'
						name='login_email'
						label='email address: '
						/* 		error={errors.name} */
					/>
					<FormInput
						handleOnChange={this.handleOnChange}
						type='password'
						placeholder='password'
						id='login_password'
						name='login_password'
						label='password: '
						/* 		error={errors.password} */
					/>
					<Button label='Log In' type='submit' onClick></Button>
				</form>
			</div>
		);
	}
}
