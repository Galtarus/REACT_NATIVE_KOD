import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { getRessources } from '../services/apirest';
import { Button } from '../components/Button';

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
				{/* <Text>{JSON.stringify(this.state.data)}</Text> */}
				<Button
					name="CAT1"
					screen={'Category'}
					navigation={this.props.navigation}
					data={this.state.data.filter((prod) => prod.category == 0)}
				></Button>
				<Button
					name="cat2"
					screen={'Category'}
					navigation={this.props.navigation}
					data={this.state.data.filter((prod) => prod.category == 1)}
				></Button>
				<Button
					name="cat3"
					screen={'Category'}
					navigation={this.props.navigation}
					data={this.state.data.filter((prod) => prod.category == 2)}
				></Button>
				<Button
					name="cat4"
					screen={'Category'}
					navigation={this.props.navigation}
					data={this.state.data.filter((prod) => prod.discount != 0)}
				></Button>
			</View>
		);
	}
}
