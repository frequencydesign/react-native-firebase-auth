import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: "AIzaSyBE5-MJQIsipshOwEUhGIDhHRWP2uLNrXY",
	    authDomain: "auth-b1675.firebaseapp.com",
	    databaseURL: "https://auth-b1675.firebaseio.com",
	    storageBucket: "auth-b1675.appspot.com",
	    messagingSenderId: "941097233528"
	  });
	}


	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;