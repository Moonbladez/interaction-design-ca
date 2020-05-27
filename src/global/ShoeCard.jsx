import React, { Component } from "react";

export class ShoeCard extends Component {
	render() {
		return (
			<div>
				<div>{this.props.image}</div>
				<div className='footer'>
					<h4>{this.props.title}</h4>
				</div>
			</div>
		);
	}
}
