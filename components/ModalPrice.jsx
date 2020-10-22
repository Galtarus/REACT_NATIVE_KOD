import React, { useState } from 'react';
import { View, StyleSheet, Image, Modal, Text, Alert, Button } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import ButtonHeader from '../components/ButtonHeader';
import { images } from '../constants/images';

export function ModalPrice(props) {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Envoyer votre commande?",
      "Envoyer votre commande de "+ props.price + " € à Thibault?",
      [
        {
          text: "Non",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Oui", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    return (
      <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={createTwoButtonAlert}>
				<Text style={styles.important}>Valider</Text>
			</TouchableOpacity>
    )
    return (<Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />);
}


const styles = StyleSheet.create({
	important: {
		color: 'white',
		fontSize: 20,
		marginBottom: 10,
		marginRight: 10,
	},
});

