/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import Filter from './Data/Filter';
import Total from './Data/Total';
import Expenses from './Data/Expenses';
import Expense from './Data/Expense';
import {formatValue, SwitchView} from './functions.js';

// Render
class ViewData extends Component {
	constructor(props) {
		super(props);
		this.onFilterChange = this.onFilterChange.bind(this);
		this.state = {
			filter: 'month',
			today: {
				yy: (new Date()).getFullYear(),
				mm: (new Date()).getMonth(),
				dd: (new Date()).getDate(),
			},
			monthGroup: null,
		}
	}
	static propTypes = {
		data: PropTypes.array,
	}
	onFilterChange(filter) {
		const {data} = this.props;
		this.setState({
			filter,
		});
		if (filter == 'overview') {
			let monthGroup = [];
			monthGroup = data.map((item) => {
				let yy = item.date.getUTCFullYear();
				let mm = item.date.getUTCMonth();
				if (monthGroup.length > 0) {
					if (monthGroup.indexOf(yy) === -1){
						monthGroup.push(yy);
					}
					this.setState({
						monthGroup,
					});
				} else {
					monthGroup.push(yy);
				}
			});
		} else {
			this.setState({
				monthGroup: null,
			});
		}
	}
	render() {
		const {data} = this.props;
		const {filter, today, monthGroup} = this.state;
		let expenses,
			printTotal = <Total total={0} />,
			// printTotal,
			total = 0;

		if (data) {
			if (filter == 'today' || filter == 'month' ) {
				expenses = data.map((item) => {
					item.date = new Date(item.date);
					return (item);
				}).filter(({date}) => {
					let yy = date.getUTCFullYear(),
						mm = date.getUTCMonth(),
						dd = date.getUTCDate();
					if (filter == 'today') {
						// Return if today matches exactly
						return(yy === today.yy && mm === today.mm && dd === today.dd );
					} else if (filter == 'month') {
						// Return if month matches today
						return(yy === today.yy && mm === today.mm);
					}
				}).sort((a, b) =>
					a.date > b.date ? -1 : b.date > a.date ? 1 : 0
				).map((item, index) => {
					total += item.value;
					// total = Math.round(total*100)/100;
					// total = formatValue(total);
					printTotal = (
						<Total total={total} />
					);
					return <Expense key={index} item={item} />
				});
			} else {
				expenses = data;
			}
		}
		return (
			<div
				id="view--data"
				className="view view--data">
				<header>
					<button
						onClick={() => SwitchView('menu')}
						className="callback--menu">
						Menu
					</button>
					<a href="https://github.com/ohjoycelau/budget-webapp" target="blank"><button>Github</button></a>
				</header>
				<main>
					<div className="header">
						<Filter onFilterChange={this.onFilterChange.bind(this)}/>
						{printTotal}
					</div>
					<div className="expenses">
						<Expenses
							expenses={expenses}
							monthGroup={monthGroup} />
					</div>
				</main>
				<footer>
					<button
						onClick={() => SwitchView('edit')}
						className="callback--edit">
						Edit
					</button>
				</footer>
			</div>
		);
	}
}

export default ViewData;
