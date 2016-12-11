import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';
import firebase from 'firebase';

class LoginForm extends Component {
	state = {email: '', password: '', error: ''};
	
	onButtonPress() {
		const {email, passowrd} = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.catch(() => {
					this.setState({error: 'ya brain broke'})
				});
			});
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({email})}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry={true}
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({password})}
					/>

				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;