import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Button(props) {
	return (
		<TouchableOpacity
			style={{ backgroundColor: 'skyblue' }}
			onPress={() => props.navigation.navigate(props.screen)}
		>
			<Text>{props.name}</Text>
		</TouchableOpacity>
	);
}
