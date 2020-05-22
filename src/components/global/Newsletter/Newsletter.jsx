import React, { Component } from "react";

import styles from "./newsletter.module.scss";
import { Button } from "../../utils/Button";
import { FormInput } from "../../FormInput";

export class NewsLetter extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	handleChange(currentEvent) {
		this.setState({ value: currentEvent.target.value });
	}
	render() {
		return (
			<div className={styles.newsletter}>
				<form action='' onSubmit={this.handleSubmit}>
					<FormInput
						label='sign up for our newsletter'
						placeholder='enter your email address'
						type='email'
						id='email'
						name='email'
						className=''
						required
					/>
					<Button label='Submit' type='submit'></Button>
				</form>
			</div>
		);
	}
}
