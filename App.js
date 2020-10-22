import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './screens/Home';
import { Product } from './screens/Product';
import { Category } from './screens/Category';
import { ShipList } from './screens/ShipList';
import { RestoList } from './screens/RestoList';
import { RecetteList } from './screens/RecetteList';
import { StaticTemplate } from './screens/StaticTemplate';



import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Category" component={Category} />
				<Stack.Screen name="Produit" component={Product} />
				<Stack.Screen name="ShipList" component={ShipList} />
				<Stack.Screen name="RestoList" component={RestoList} />
				<Stack.Screen name="RecetteList" component={RecetteList} />
				<Stack.Screen name="StaticTemplate" component={StaticTemplate} />


			</Stack.Navigator>
		</NavigationContainer>
	);
}
