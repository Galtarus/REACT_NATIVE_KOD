import { addProduct, removeProduct } from '../store/actions/cartActions';
import { Background } from '../components/Background';
import { StyleSheet, Text, View } from 'react-native';
import { ModalPrice } from '../components/ModalPrice';
import { ShopItem } from '../components/ShopItem';
import { Header } from '../components/Header';
import { connect } from 'react-redux';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

function getPrices(shops) {
		let count = 0;
		console.log(shops);
    if(shops) {
			shops.forEach(shop => {
        count += shop.price * shop.nomberProduct;
		});
		}
    return count;
}

class Shop extends  React.Component {
  render(){
		return (
			<Background>
				<Header navigation={this.props.navigation} />
				<Text style={{ textAlign: 'center' }}>Modifier la quantité en tappant sur chaque produit</Text>
				<View style={styles.container}>
				<ScrollView>
				<View>
							{this.props.shops.map((shop) => (<ShopItem key={shop.id} 
									item={shop} 
									addProduct={this.props.addProduct}
									removeProduct={this.props.removeProduct} >
							</ShopItem>))}
					</View>
					
				</ScrollView>
				<View style={styles.resume}>
						<Text style={styles.price}>Total {getPrices(this.props.shops)} €</Text>
						<Text style={styles.text}>Lieu de livraison (choisir):</Text>
						<Text style={styles.text}>Bistrot des Gascons</Text>
						<Text style={styles.text}>26 Avenue de Trouville, 75007 Paris</Text>
						<Text style={styles.text}>Date de livraison</Text>
						<Text style={styles.text}>Samedi 16 Mars, à partir de 9h</Text>
						<ModalPrice price={getPrices(this.props.shops)}></ModalPrice>
					</View>
				</View>
			</Background>
		);	
	}
}

const mapStateToProps = (state) => {
	return {
		shops: state.cart.products,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addProduct: (data) => {
			dispatch(addProduct(data));
		},
		removeProduct: (data) => {
			dispatch(removeProduct(data));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

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