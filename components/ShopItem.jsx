import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { images } from '../constants/images';
import { addProduct, removeProduct } from '../store/actions/cartActions';

function isInCart(props) {
	let result = props.products.filter((value) => {
		return value.id == props.item.id;
	});
	return result.length > 0;
}

function ProductItem(props) {
	return (
		<TouchableOpacity
			onPress={() => {
				if (!isInCart(props)) {
					props.addProduct(props.item);
				} else {
					props.removeProduct(props.item);
				}
			}}
		>
			<View style={styles.item}>
				<Image source={images.poulpe.uri} style={styles.img} />
				<Text style={styles.text}>{props.item.name}</Text>
				<Text style={styles.text}>
					{isInCart(props) && 'OK '}
					{props.item.price} €
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const mapStateToProps = (state) => {
	return {
		products: state.cart.products,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);

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
