import React from 'react';
import { Home } from './screens/Home';
import { Product } from './screens/Product';
import { Category } from './screens/Category';
import { ShipList } from './screens/ShipList';
import { RestoList } from './screens/RestoList';
import { RecetteList } from './screens/RecetteList';
import { StaticTemplate } from './screens/StaticTemplate';
import store from './store/configureStore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Shop from './screens/Shop';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Category" component={Category} />
					<Stack.Screen name="Produit" component={Product} />
					<Stack.Screen name="ShipList" component={ShipList} />
					<Stack.Screen name="RestoList" component={RestoList} />
					<Stack.Screen name="RecetteList" component={RecetteList} />
					<Stack.Screen name="StaticTemplate" component={StaticTemplate} />
					<Stack.Screen name="Shop" component={Shop} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
