import React, { Component } from "react";

export class StoreCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { name, address, telephone, email, openingHours } = this.props.config;
		return (
			<div>
				<h3>{name}</h3>
				<p>{address}</p>
				<a href={`tel:${telephone}`}>{telephone}</a>
				<a href={`mailto:${email}`}>{email}</a>
				<h4>Opening Hours</h4>
				{openingHours.map((day) => {
					console.log(day);
					return (
						<table>
							<tr>
								<td>{day.day}</td>
								<td>{day.hours}</td>
							</tr>
						</table>
					);
				})}
			</div>
		);
	}
}
