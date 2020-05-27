import React, { Component } from "react";

import styles from "./Banner.module.scss";

export class Banner extends Component {
	render() {
		return (
			<header className={(this.props.className, styles.banner)}>
				<h2>{this.props.title}</h2>
				<p>{this.props.info}</p>
				{this.props.children}
			</header>
		);
	}
}
