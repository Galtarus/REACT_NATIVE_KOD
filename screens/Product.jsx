import { Background } from '../components/Background';
import ProductItem from '../components/ProductItem';
import { Header } from '../components/Header';
import React, { Component } from 'react';

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
						<ProductItem key={prod.id} item={prod}></ProductItem>
					);
				})}
			</Background>
		);
	}
}