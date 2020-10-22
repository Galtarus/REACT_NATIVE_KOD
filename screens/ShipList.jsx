import { Background } from '../components/Background';
import { StyleSheet, Text, View } from 'react-native';
import { contact } from '../constants/contact';
import { Button } from '../components/Button';
import { images } from '../constants/images';
import { ships } from '../constants/ships';
import React from 'react';

export function ShipList(props) {
	return (
		<Background>
			<View style={{ flex: 1, justifyContent: 'space-around' }}>
				<View>
					<Text style={styles.title}>
						Nos Bateaux partenaires!
					</Text>
				</View>
				<View>
					<Text style={styles.bold}>Tout les eaux menent a Thibault.</Text>

					<Text style={styles.text}>06.63.99.99.78</Text>
					<Text style={styles.text}>
						lebateaudethebault@gmail.com
					</Text>
					<Text style={styles.text}>
						www.facebook.com/lebatheaudethibault
					</Text>
				</View>
				<View style={{ flexDirection: 'column' }}>

					<View style={{ flexDirection: 'row' }}>

						<View style={styles.col}>
							{ships.map((value, index) => {
								if (index%2==0) {
									return <Button key={index}
										name={value.imgName}
										uri={value.uri}
										subtext={value.subtext}
										poesie={value.poesie}
										screen={"StaticTemplate"}
										navigation={props.navigation}
									/>
								}
							})}
						</View>
						<View style={styles.col}>
							{ships.map((value, index) => {
								if (index%2==1) {
									return <Button key={index}
										name={value.imgName}
										uri={value.uri}
										subtext={value.subtext}
										poesie={value.poesie}
										screen={"StaticTemplate"}
										navigation={props.navigation}
									/>
								}
							})}
						</View>
					</View>

					<Button 
								uri={images.TIG.uri}
								name="Contact"
								screen={"StaticTemplate"}
								subtext={contact.tig.subtext}
								poesie={contact.tig.poesie}
								navigation={props.navigation}
							/>
				</View>
			</View>
		</Background >
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
