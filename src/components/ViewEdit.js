/* eslint-disable */
import React, { Component, Proptypes } from 'react';
import {SwitchView} from './functions.js';


class ViewEdit extends Component {
	render() {
		return (
			<div
				id="view--edit"
				className="view view--edit">
				<button
					onClick={() => SwitchView()} >
					Close ViewEdit
				</button>
				<form>
					Expense Editing Page
				</form>
			</div>
		);
	}
}

export default ViewEdit;
