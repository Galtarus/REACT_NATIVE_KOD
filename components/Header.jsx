import { View, StyleSheet, Image } from 'react-native';
import ButtonHeader from '../components/ButtonHeader';
import { images } from '../constants/images';
import React from 'react';

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
				screen="Shop"
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
		maxHeight: 53
	},
	img: {
		flex: 0.92,
        aspectRatio: 0.8,
        resizeMode: 'contain'
	},
});
