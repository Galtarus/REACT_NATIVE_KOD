import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

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
					style={{ width: 45, height: 45, }}
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
