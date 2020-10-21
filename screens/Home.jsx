import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { images } from '../constants/images';
import { Background } from '../components/Background';

export function Home(props) {
	return (
		<Background>
			<View style={{ flex: 1, justifyContent: 'space-around' }}>
				<View>
					<Text style={styles.title}>
						Vente en direct de notre bateau
					</Text>
				</View>
				<View>
					<Text style={styles.bold}>Le bateau de Thibault</Text>

					<Text style={styles.bold}>
						Produits selon la saison, Livraisons sur Paris
					</Text>
					<Text style={styles.text}>06.63.99.99.78</Text>
					<Text style={styles.text}>
						lebateaudethebault@gmail.com
					</Text>
					<Text style={styles.text}>
						www.facebook.com/lebatheaudethibault
					</Text>
				</View>

				<View style={{ flexDirection: 'column' }}>
					<Button
						name="Produits et promotions"
						screen="Category"
						navigation={props.navigation}
						uri={images.poisson.uri}
					/>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.col}>
							<Button name="Bateaux" uri={images.ancre.uri} />
							<Button name="Recettes" uri={images.recette.uri} />
						</View>
						<View style={styles.col}>
							<Button
								name="Restaurants"
								uri={images.restaurant.uri}
							/>
							<Button name="Contact" uri={images.tourteau.uri} />
						</View>
					</View>
				</View>
			</View>
		</Background>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'black',
		textAlign: 'center',
		fontSize: 13,
	},
	bold: {
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 13,
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
	},
	col: {
		flexDirection: 'column',
		flex: 1,
	},
});
