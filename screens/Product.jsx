import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { getRessources } from '../services/apirest';

export class Product extends Component {
	// Components/Search.js

	constructor(props) {
		super(props);
		this.state = { data: [] };
	}

	componentDidMount() {
		getRessources('products').then((res) => {
			this.setState({ data: res });
		});
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					alignItems: 'stretch',
				}}
			>
				<Text>{JSON.stringify(this.state.data)}</Text>
			</View>
		);
	}
}
