import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function ButtonCat(props) {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() =>
				props.navigation.navigate(props.screen, {
					data: props.data ? props.data : [],
				})
			}
		>
			<Image source={props.uri} style={styles.img} />
			<Text style={styles.text}>{props.name}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		color: 'white',
		alignItems: 'center',
	},
	button: {
		height: 80,
		backgroundColor: 'grey',
		opacity: 0.7,
		margin: 5,
		borderWidth: 2,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
	},
	img: {
		width: 65,
		height: 65,
		marginHorizontal: 10,
	},
});
