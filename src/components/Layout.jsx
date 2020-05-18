import React, { Component } from "react";
import { Navbar } from "./global/Navigation/Navbar";
import { Footer } from "./global/Footer/Footer";

export class Layout extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<>
				<Navbar />
				{this.props.children}
				<Footer />
			</>
		);
	}
}
