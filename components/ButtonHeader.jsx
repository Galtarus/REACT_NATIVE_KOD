import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ButtonHeader(props) {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() =>
				props.navigation.navigate(props.screen, {
					data: props.data ? props.data : [],
				})
			}
		>
			{props.image && (
				<Image
					source={props.image}
					style={{ width: 50, height: 50, marginRight: 10 }}
				/>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		padding: 5,
	},
});
