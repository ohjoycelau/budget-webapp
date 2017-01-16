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
		let print = expenses;

		if (monthGroup && expenses) {
			print = [];
			let group = [],
				groupY = [],
				groupM = [];
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
						// console.log('group[m]', groupY[year][index].date);
						let mm = item.date.getUTCMonth();
						if (m == mm){
							return item;
						}
					}).map((item, index) => {
						return <Expense key={index} item={item} />
					});

					// console.log('groupM', m, groupM[m]);
					// console.log(groupM[m].length);
					if (groupM[m].length > 0) {
						group.push(groupM[m]);
					}
				}

			}

			console.log(group);
			for (let g = 0; g < group.length; g++){
				console.log(group[g]);
			}

			print = group.map((month, index) => {
				return(
					<MonthGroup key={index} monthGroup={month} />
				);
			})

			return (
				<ul className="expenses--list">
					<h1>Month Groups</h1>
					{print}
					<hr/>
				</ul>
			)

		} else {		
			return (
				<ul className="expenses--list">
					{print}
				</ul>
			);
		}


	}
}

export default Expenses;
