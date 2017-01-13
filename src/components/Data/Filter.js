/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import {months} from './../functions.js';


class Filter extends Component {
	static propTypes = {
		onFilterChange: PropTypes.func
	}
	constructor(props) {
		super(props);
		this.state = {
			thisMonth: 'Month',
		}
	}
	componentWillMount() {
		let mm = (new Date()).getUTCMonth();
		this.setState({
			thisMonth: months[mm],
		});
	}
	render() {
		const {thisMonth} = this.state;
		const {onFilterChange} = this.props;
		return (
			<div className="filter">
				<button
					onClick={() => onFilterChange('today')}>
					Today
				</button>
				<button
					onClick={() => onFilterChange('month')}>
					{thisMonth}</button>
				<button
					onClick={() => onFilterChange('overview')}>
					Overview</button>
			</div>
		);
	}
}

export default Filter;
