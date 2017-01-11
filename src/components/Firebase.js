import * as firebase from 'firebase';
const config = {
	apiKey: 'AIzaSyC-QwoD2shSio25oBHtMspw1ZeWl9Z_Ba8',
	authDomain: 'budget-15789.firebaseapp.com',
	databaseURL: 'https://budget-15789.firebaseio.com',
	storageBucket: 'budget-15789.appspot.com',
	messagingSenderId: '938874170950',
};
const InitDb = firebase.initializeApp(config, 'reusable');


module.exports.InitDb = InitDb;