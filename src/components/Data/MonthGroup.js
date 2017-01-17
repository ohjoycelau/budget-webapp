/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import Expense from './Expense';
import {months, formatValue} from './../functions.js';

class MonthGroup extends Component {
	static propTypes = {
		mm: PropTypes.number,
		yy: PropTypes.number,
		monthTotal: PropTypes.number,
		monthGroup: PropTypes.array,
	}
	// on click
	// toggle Expense block, return/hide
	render() {
		const {mm, yy, monthTotal, monthGroup} = this.props;
		let group = monthGroup,
			groupMonth,
			displayTotal = formatValue(monthTotal);
		if (monthGroup) {
			groupMonth = months[mm];
			group = group.map((item, index) => {
				// monthTotal += item.value;
				// monthTotal = formatValue(monthTotal);
				// console.log(monthTotal);
				return <Expense key={index} item={item} />;
			});
		}
		return(
			// initial, print all months and totals
			// on click, toggle return Expense block
			<div>
				<hr/>
				<h1>{groupMonth}/{yy}</h1>
				<h2>{displayTotal}</h2>
				<div>{group}</div>
			</div>
		);
	}
}

export default MonthGroup;
