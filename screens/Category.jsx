import { Background } from '../components/Background';
import { ButtonCat } from '../components/ButtonCat';
import { getRessources } from '../services/apirest';
import { Header } from '../components/Header';
import { images } from '../constants/images';
import { StyleSheet } from 'react-native';
import React, { Component } from 'react';

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
				<ButtonCat
					name="Poissons"
					uri={images.poulpe.uri}
					navigation={this.props.navigation}
					screen={'Produit'}
					data={this.state.data.filter((prod) => prod.category == 0)}
				></ButtonCat>
				<ButtonCat
					name="Coquillages"
					uri={images.poulpe.uri}
					navigation={this.props.navigation}
					screen={'Produit'}
					data={this.state.data.filter((prod) => prod.category == 1)}
				></ButtonCat>
				<ButtonCat
					name="Crustacés"
					uri={images.poulpe.uri}
					navigation={this.props.navigation}
					screen={'Produit'}
					data={this.state.data.filter((prod) => prod.category == 1)}
				></ButtonCat>

				<ButtonCat
					name="Promotions"
					uri={images.poulpe.uri}
					navigation={this.props.navigation}
					screen={'Produit'}
					data={this.state.data.filter((prod) => prod.discount != 0)}
				></ButtonCat>
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
