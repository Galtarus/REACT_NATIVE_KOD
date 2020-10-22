import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../constants/images';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../store/actions/cartActions';

export class ShopItem extends Component {
   
	render() {
		return (
			<View>
				<TouchableOpacity 
				onPress={() => this.props.addProduct(this.props.item)}
				onLongPress={() => this.props.removeProduct(this.props.item)}
				>
					<View style={styles.item}>
						<Image source={images.poulpe.uri} style={styles.img} />
						<Text style={styles.text}>{this.props.item.name}</Text>
						<Text style={styles.text}>{this.props.item.nomberProduct}x{this.props.item.price}€: {this.props.item.nomberProduct * this.props.item.price}€</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: 'grey',
		opacity: 0.7,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 50,
	},
	text: {
		color: 'white',
	},
	img: {
		width: 40,
		height: 40,
	},
});
