import React, { Component, PropTypes } from 'react';
import Expense from './Expense';

class MonthGroup extends Component {
	static propTypes = {
		monthTotal: PropTypes.string,
		monthGroup: PropTypes.array,
	}
	render() {
		const {monthTotal, monthGroup} = this.props;

		return(
			<div>
				<hr/>
				<h1>Month</h1>
				<div>{monthGroup}</div>
			</div>
		);
	}
}

export default MonthGroup;
