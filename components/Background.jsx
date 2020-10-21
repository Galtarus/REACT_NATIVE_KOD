import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { images } from '../constants/images';

export function Background(props) {
	return (
		<ImageBackground source={images.background.uri} style={styles.image}>
			{props.children}
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: 'cover',
	},
});
