import React, { Component } from "react";

export class StoreCard extends Component {
	render() {
		const {
			name,
			address,
			telephone,
			email,
			openingHours,
			image,
		} = this.props.config;
		return (
			<div>
				<img src={image} alt='' />
				<h3>{name}</h3>
				<p>{address}</p>
				<a href={`tel:${telephone}`}>{telephone}</a>
				<a href={`mailto:${email}`}>{email}</a>
				<h4>Opening Hours</h4>
				<table>
					{openingHours.map((day) => {
						console.log(day);
						return (
							<tr>
								<td>{day.day}</td>
								<td>{day.hours}</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	}
}
