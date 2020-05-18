import React, { Component } from "react";
import data from "../config/shoe-data.json";

export class ShoeCard extends Component {
	render() {
		fetch(data);
		console.log(data.length);
		return (
			<figure>
				<h4>{data.name}sdsd</h4>
			</figure>
		);
	}
}
