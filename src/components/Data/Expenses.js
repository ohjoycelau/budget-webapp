/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import Expense from './Expense';

class Expenses extends Component {
	static propTypes = {
		expenses: PropTypes.array,
	}
	render() {
		const expenses = this.props.expenses;
		return (
			<ul className="expenses--list">
				{expenses}
			</ul>
		);
	}
}

export default Expenses;
