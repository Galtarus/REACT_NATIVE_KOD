import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './screens/Home';
import { Product } from './screens/Product';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Search" component={Home} />
				<Stack.Screen name="Produits" component={Product} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
