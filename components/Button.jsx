import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Button(props) {
	return (
		<TouchableOpacity
			style={{
				height: 80,
				backgroundColor: 'grey',
				opacity: 0.7,
				margin: 5,
				borderWidth: 2,
				justifyContent: 'center',
			}}
			onPress={() =>
				props.navigation.navigate(props.screen, {
					data: props.data ? props.data : [],
				})
			}
		>
			<Text
				style={{
					textAlign: 'center',
					color: 'white',
					alignItems: 'center',
				}}
			>
				{props.name}
			</Text>
		</TouchableOpacity>
	);
}
