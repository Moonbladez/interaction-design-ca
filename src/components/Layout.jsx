import React, { Component } from "react";
import { Navbar } from "./global/Navigation/Navbar";
import { Footer } from "./global/Footer/Footer";
import { NewsLetter } from "./global/Newsletter/Newsletter";

export class Layout extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<>
				<Navbar />
				{this.props.children}
				<NewsLetter />
				<Footer />
			</>
		);
	}
}
