import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { images } from '../constants/images';

export function Home(props) {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={images.background.uri}
				style={styles.image}
			>
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
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.col}>
						<Button
							name="PRODUIT"
							screen="Produits"
							navigation={props.navigation}
						></Button>
						<Button name="billet"></Button>
					</View>
					<View style={styles.col}>
						<Button name="brillet"></Button>
						<Button name="billet"></Button>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'space-around',
	},
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
