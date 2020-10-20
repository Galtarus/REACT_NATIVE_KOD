import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';

export function Home(props) {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'column',
				alignItems: 'stretch',
			}}
		>
			<View
				style={{
					backgroundColor: 'powderblue',
					flex: 3,
				}}
			/>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<Button
					name="PRODUIT"
					screen={'Produits'}
					navigation={props.navigation}
				/>
				<Button name="btn2" />
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<Button name="btn3" />
				<Button name="btn4" />
			</View>
		</View>
	);
}
