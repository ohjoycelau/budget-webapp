/* eslint-disable */
import React, { Component } from 'react';
import {formatValue} from './../functions.js';

class Expense extends Component {
	render() {
		const {item} = this.props;
		let date = item.date;
		let day = ('0' + date.getUTCDate()).slice(-2);

		let description = item.description;
		let category = item.category;
		let value = formatValue(item.value);

		return (
			<li className="expense entry">
				<div className="entry--date">
					{day}
				</div>
				<div className="entry--item">
					<p className="entry--item-description">
						{description}
					</p>
					<p className="entry--item-category">
						{category}
					</p>
				</div>
				<div className="entry--value">
					{value}<span className="currency">$</span>
				</div>
			</li>
		);
	}
}

export default Expense;
