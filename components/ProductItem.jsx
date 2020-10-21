import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../constants/images';

export function ProductItem(props) {
	return (
		<TouchableOpacity>
			<View style={styles.item}>
				<Image source={images.poulpe.uri} style={styles.img} />
				<Text style={styles.text}>{props.product.name}</Text>
				<Text style={styles.text}>{props.product.price} €</Text>
			</View>
		</TouchableOpacity>
	);
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
