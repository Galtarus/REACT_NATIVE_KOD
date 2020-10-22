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
        { text: "Non", style: "cancel" },
        { text: "Oui"}
      ],
      { cancelable: false }
    );
    return (
      <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={createTwoButtonAlert}>
				<Text style={styles.important}>Valider</Text>
			</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	important: {
		color: 'white',
		fontSize: 20,
		marginBottom: 10,
		marginRight: 10,
	},
});

