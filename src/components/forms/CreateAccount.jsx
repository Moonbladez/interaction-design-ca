import React, { Component } from "react";

import { FormInput } from "./FormInput";
import { Button } from "../buttons/Button";

export class CreateAccount extends Component {
	render() {
		return (
			<div>
				<h2>Create an Account</h2>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						placeholder='first name'
						id='create_name'
						name='create_name'
						label='name: '
					/>
					<FormInput
						type='text'
						placeholder='last name'
						id='create_surnam'
						name='create_surname'
						label='last name: '
					/>
					<FormInput
						type='email'
						placeholder='email address'
						id='create_email'
						name='create_email'
						label='email address: '
					/>
					<FormInput
						type='password'
						placeholder='password'
						id='create_password'
						name='create_password'
						label='password: '
					/>
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
