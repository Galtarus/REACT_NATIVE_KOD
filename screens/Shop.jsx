import React from 'react';
import { Background } from '../components/Background';
import { Header } from '../components/Header';
import {  StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import  ShopItem  from '../components/ShopItem';
import { ModalPrice } from '../components/ModalPrice';

function getPrices(props) {
    let count = 0;
    props.shops.forEach((shop) => {
        count += shop.price;
    });
    return count;
}

class Shop extends  React.Component {
  render(){
		return (
			<Background>
				<Header navigation={this.props.navigation} />
				<View style={styles.container}>
					<View>
						<Text style={{ textAlign: 'center' }}>Modifier la quantité en tappent sur chaque produit</Text>
						{this.props.shops.map((shop) => (<ShopItem key={shop.id} item={shop}></ShopItem>))}
					</View>
					<View style={styles.resume}>
						<Text style={styles.price}>Total {getPrices(this.props)} €</Text>
						<Text style={styles.text}>Lieu de livraison (choisir):</Text>
						<Text style={styles.text}>Bistrot des Gascons</Text>
						<Text style={styles.text}>26 Avenue de Trouville, 75007 Paris</Text>
						<Text style={styles.text}>Date de livraison</Text>
						<Text style={styles.text}>Samedi 16 Mars, à partir de 9h</Text>
						<ModalPrice price={getPrices(this.props)}></ModalPrice>
					</View>
				</View>
			</Background>
		);	
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	resume: {
		padding: 5,
		backgroundColor: 'grey',
		opacity: 0.7,
		marginBottom: 30,
		borderWidth : 1
	},
	price: {
		textAlign: 'right',
		color: 'white',
		fontSize: 20,
		margin: 10,
	},
	text: {
		color: 'white',
		marginRight: 10,
	},
	important: {
		color: 'white',
		fontSize: 20,
		marginBottom: 10,
		marginRight: 10,
	},
});

const mapStateToProps = (state) => {
	return {
		shops: state.cart.products,
	};
};

export default connect(mapStateToProps, undefined)(Shop);