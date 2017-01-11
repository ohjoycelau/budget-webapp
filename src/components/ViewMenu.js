/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import {SwitchView} from './functions.js';


class ViewMenu extends Component {
	render() {
		return (
			<div
				id="view--menu"
				className="view view--menu">
				<button
					onClick={() => SwitchView()}>
					Close Menu
				</button>
				<ul>
					<li>Savings</li>
					<li>Profile</li>
					<li>Sign Out</li>
				</ul>
			</div>
		);
	}
}

export default ViewMenu;
