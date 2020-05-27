import React, { Component } from "react";

import { Navbar } from "../../global/navigation/Navbar";
import { Footer } from "../../global/footer/Footer";
import { NewsLetter } from "../../global/newsletter/Newsletter";
import BackToTop from "../back-to-top/BackToTop";

export class Layout extends Component {
	render() {
		return (
			<>
				<Navbar />
				{this.props.children}
				<NewsLetter />
				<BackToTop />
				<Footer />
			</>
		);
	}
}
