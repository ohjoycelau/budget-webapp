/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import {formatValue} from './../functions.js';

class Total extends Component {
	static propTypes = {
		total: PropTypes.number,
	}
	render() {
		const total = this.props.total;
		let displayTotal = formatValue(total);

		return (
			<div className="total">
				<h2 className="total--number">
					{displayTotal}<span className="currency"><sup>$</sup></span>
				</h2>
				<h1 className="total--label">Total Spent</h1>
			</div>
		);
	}
}

export default Total;
