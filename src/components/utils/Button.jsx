import React, { Component } from "react";
import styles from "./button.module.scss";

export class Button extends Component {
	render() {
		return <button className={styles.button}>{this.props.content}</button>;
	}
}
