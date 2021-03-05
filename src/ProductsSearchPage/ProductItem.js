import React, { Component } from 'react'


export default class ProductItem extends Component {
	render() {
		return (
			<li>
				<h4>{this.props.name}</h4>
				<p>{this.props.brand}</p>
				<p>{this.props.description}</p>
			</li>
		)
	}
}