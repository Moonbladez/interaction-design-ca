import React, { Component } from "react";

import styles from "./newsletter.module.scss";
import { Button } from "../../utils/Button";

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
					<label htmlFor='email'>Subscribe to our newsletter</label>
					<input
						onChange={this.handleChange}
						type='email'
						name='email'
						id='email'
						placeholder='enter your email'
						value={this.state.value}
					/>

					<Button content='Submit' type='submit' color='red'></Button>
				</form>
			</div>
		);
	}
}
