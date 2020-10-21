import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Button } from '../components/Button';
import { images } from '../constants/images';
import { getRessources } from '../services/apirest';
import { Background } from '../components/Background';
import { Header } from '../components/Header';

export class Category extends Component {
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
			<Background>
				<Header navigation={this.props.navigation} />
				<Button
					name="Poissons"
					uri={images.poulpe.uri}
					navigation={this.props.navigation}
					screen={'Produit'}
					data={this.state.data.filter((prod) => prod.category == 0)}
				></Button>
				<Button
					name="Coquillages"
					uri={images.poulpe.uri}
					navigation={this.props.navigation}
					screen={'Produit'}
					data={this.state.data.filter((prod) => prod.category == 1)}
				></Button>
				<Button
					name="Crustacés"
					uri={images.poulpe.uri}
					navigation={this.props.navigation}
					screen={'Produit'}
					data={this.state.data.filter((prod) => prod.category == 1)}
				></Button>

				<Button
					name="Promotions"
					uri={images.poulpe.uri}
					navigation={this.props.navigation}
					screen={'Produit'}
					data={this.state.data.filter((prod) => prod.discount != 0)}
				></Button>
			</Background>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		color: 'black',
		textAlign: 'center',
		fontSize: 13,
	},
});
