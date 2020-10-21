import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import ButtonHeader from '../components/ButtonHeader';
import { images } from '../constants/images';

export function Header(props) {
	return (
		<View style={styles.container}>
			<ButtonHeader
				image={images.homeLogo.uri}
				screen="Home"
				navigation={props.navigation}
			/>

			<Image style={styles.img} source={images.navbarbg.uri} />

			<ButtonHeader
				image={images.cartLogo.uri}
				screen="Cart"
				navigation={props.navigation}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'black',
		alignItems: 'center',
		flex: 0.2,
	},
	img: {
		flex: 2,
		width: 200,
	},
});
