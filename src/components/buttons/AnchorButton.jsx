import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./AnchorButton.module.scss";

export class AnchorButton extends Component {
	render() {
		return (
			<Link to={this.props.location} className={styles.link}>
				{this.props.content}
			</Link>
		);
	}
}
