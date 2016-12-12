import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = {loggedIn: null};

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: "AIzaSyBE5-MJQIsipshOwEUhGIDhHRWP2uLNrXY",
	    authDomain: "auth-b1675.firebaseapp.com",
	    databaseURL: "https://auth-b1675.firebaseio.com",
	    storageBucket: "auth-b1675.appspot.com",
	    messagingSenderId: "941097233528"
	  });

		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({loggedIn: true});
			} else {
				this.setState({loggedIn: false});
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true: 
				return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				);
			case false: return <LoginForm />;

			default: <Spinner size="large" />

		}
	}


	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;