import React, { Component } from "react";
import styles from "./button.module.scss";

export class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <button className={styles.button}>{this.props.content}</button>;
	}
}
