import React, { Component } from "react";
import styles from "../home/about.module.scss";

export class About extends Component {
	render() {
		return (
			<div className={styles.about}>
				<h4>{this.props.title}</h4>
				<p>{this.props.information}</p>
			</div>
		);
	}
}
