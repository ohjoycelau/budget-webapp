/* eslint-disable */
import React, { Component } from 'react';
// Import components
import ViewData from './components/ViewData';
import ViewMenu from './components/ViewMenu';
import ViewEdit from './components/ViewEdit';
// Firebase
import * as firebase from 'firebase';
var config = {
	apiKey: "AIzaSyC-QwoD2shSio25oBHtMspw1ZeWl9Z_Ba8",
	authDomain: "budget-15789.firebaseapp.com",
	databaseURL: "https://budget-15789.firebaseio.com",
	storageBucket: "budget-15789.appspot.com",
	messagingSenderId: "938874170950"
};
const budgetTracker = new firebase.initializeApp(config);
const dbObj = budgetTracker.database().ref().child('data');
function getData(callback) {
	// console.log(dbObj);
	dbObj.on('value', snap => {
		// console.log(snap.val());
		callback(snap.val());
	});
}

// Render components
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}
	componentWillMount() {
		getData((data) => {
			this.setState({
				data,
			})
		});
	}
	render() {
		const {data} = this.state;
		return (
			<div className="viewContainer">
				<ViewData data={data} />
				<ViewMenu />
				<ViewEdit />
			</div>
		);
	}
}

export default App;
