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
			todayObj: [],
			thisMonth: 'Month',
		}
	}
	componentWillMount() {
	}
	render() {
		const {todayObj, thisMonth} = this.state;
		const {onFilterChange} = this.props;
		return (
			<div>
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
