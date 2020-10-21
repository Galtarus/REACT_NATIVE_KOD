import { Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import { getRessources } from '../services/apirest';
import { Button } from '../components/Button';
import { images } from '../constants/images';
import { Background } from '../components/Background';
import { ProductItem } from '../components/ProductItem';
import { Header } from '../components/Header';

export class Product extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const products = this.props.route.params.data
			? this.props.route.params.data
			: [];
		return (
			<Background>
				<Header navigation={this.props.navigation} />
				{products.map((prod) => {
					return (
						<ProductItem key={prod.id} product={prod}></ProductItem>
					);
				})}
			</Background>
		);
	}
}
