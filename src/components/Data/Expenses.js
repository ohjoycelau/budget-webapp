/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import Expense from './Expense';

class Expenses extends Component {
	static propTypes = {
		expenses: PropTypes.array,
		monthGroup: PropTypes.array,
	}
	render() {
		const {expenses, monthGroup} = this.props;
		let print = expenses;
		if (monthGroup) {
			print = 'woot';
			console.log(monthGroup);
		}

		return (
			<ul className="expenses--list">
				{print}
			</ul>
		);
	}
}

export default Expenses;
