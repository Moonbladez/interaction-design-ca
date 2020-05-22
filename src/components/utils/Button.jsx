import React, { Component } from "react";
import styles from "./button.module.scss";

export class Button extends Component {
	render() {
		return (
			<button
				className={styles.button}
				type={this.props.type}
				onClick={this.props.handleClick}
			>
				{this.props.label}
			</button>
		);
	}
}
