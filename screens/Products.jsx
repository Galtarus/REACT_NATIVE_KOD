import { Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import { getRessources } from '../services/apirest';
import { Button } from '../components/Button';
import { images } from '../constants/images';

export class Category extends Component {
	render() {
		const products = this.props.route.params.data
			? this.props.route.params.data
			: [];
		return (
			<View>
				<Image source={images.poisson.uri} width="100" />
				<Text>{JSON.stringify(products)}</Text>
			</View>
		);
	}
}
