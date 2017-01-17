/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import Expense from './Expense';
import MonthGroup from './MonthGroup';

class Expenses extends Component {
	static propTypes = {
		expenses: PropTypes.array,
		monthGroup: PropTypes.array,
	}
	render() {
		const {expenses, monthGroup} = this.props;
		let printGroup = expenses;

		if (monthGroup && expenses) {
			printGroup = [];
			let groups = [],
				groupY = [],
				groupM = [],
				monthTotal = 0;
			let years = monthGroup.sort((a, b) => a > b ? -1 : b > a ? 1 : 0 );

			for ( let y = 0; y < years.length; y++) {
				// save each item by year
				let year = years[y];
				groupY[year] = expenses.filter((item) => {
					let yy = item.date.getUTCFullYear();
					if (year === yy) {
						return(yy);
					}
				});
				// console.log(year, groupY);

				for (let m = 0; m < 12; m++) {
					groupM[m] = groupY[year].filter((item, index) => {
						// console.log('groups[m]', groupY[year][index].date);
						let mm = item.date.getUTCMonth();
						if (m == mm){
							return item;
						}
					})
					// .map((item, index) => {
					// 	return <Expense key={index} item={item} />
					// });
					// console.log('groupM', m, groupM[m]);
					// console.log(groupM[m].length);

					if (groupM[m].length > 0) {
						groups.push(groupM[m]);
					}
				}

			}


			printGroup = groups.map((group, index) => {
				// let value;
				let month = group[0].date.getUTCMonth(),
					year = group[0].date.getUTCFullYear();
				// let value = group;
				// console.log(index, group);
				// monthTotal = monthTotal + value;
				group.map((item, index) => {
					monthTotal += item.value;
				});
				return(
					<MonthGroup
						key={index}
						mm={month}
						yy={year}
						monthTotal={monthTotal}
						monthGroup={group} />
				);
			});
		}
		return (
			// Expenses
				// MonthGroup
					// expand/collapse Expense Block controls
					// ExpenseBlock
				// ExpenseBlock
			<ul className="expenses--list">
				{printGroup}
			</ul>
		);
	



	}
}

export default Expenses;
