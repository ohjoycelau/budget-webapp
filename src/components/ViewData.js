/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import Filter from './Data/Filter';
import Total from './Data/Total';
import Expenses from './Data/Expenses';
import Expense from './Data/Expense';
import {SwitchView} from './functions.js';

// Render
class ViewData extends Component {
	constructor(props) {
		super(props);
		this.onFilterChange = this.onFilterChange.bind(this);
		this.state = {
			filter: 'month',
			today: {
				yy: (new Date()).getUTCFullYear(),
				mm: (new Date()).getUTCMonth() + 1,
				dd: (new Date()).getUTCDay(),
			}
		}
	}
	static propTypes = {
		data: PropTypes.array,
	}
	onFilterChange(filter) {
		if (filter === 'today') {
			this.setState({
				filter,
			});
		} else if (filter === 'month') {
			this.setState({
				filter,
			});
		} else if (filter === 'overview') {
			this.setState({
				filter,
			});
		}
	}
	render() {
		const items = this.props.data;
		const {filter, today} = this.state;
		// console.log(today);

		let expenses,
			printTotal;
		let total = 0;
		if (items) {
			expenses = items.map((item) => {
				item.date = new Date(item.date);
				return (item);
			}).filter(({date}) => {
				let yy = date.getUTCFullYear(),
					mm = date.getUTCMonth() + 1,
					dd = date.getUTCDay();
				
				if (filter == 'today') {
					// Return if today matches exactly
					return(yy === today.yy && mm === today.mm && dd === today.dd );
				} else if (filter == 'month') {
					// Return if month matches today
					return(yy === today.yy && mm === today.mm);
				} else if (filter == 'overview') {
					return dd;
				}
			}).sort((a, b) =>
				a.date > b.date ? -1 : b.date > a.date ? 1 : 0
			).map((item, index) => {
				if (filter == 'today' || filter == 'month') {
					total += item.value;
					total = Math.round(total*100)/100;
					printTotal = (
						<Total total={total} />
					);
					return (
						<Expense
							key={index}
							item={item}
						/>
					);
				} else {
					return (
						<Expense
							key={index}
							item={item}
						/>
					);
				}
			});
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
				</header>
				<main>
					<div className="header">
						<Filter onFilterChange={this.onFilterChange.bind(this)}/>
						{printTotal}
					</div>
					<div className="expenses">
						<Expenses expenses={expenses} />
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
