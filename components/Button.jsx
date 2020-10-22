import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, StyleSheet, Text } from 'react-native';
import React from 'react';

export function Button(props) {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() =>
				props.navigation.navigate(props.screen, {
					data:{
						name:props.name,
						uri:props.uri,
						subtext:props.subtext,
						poesie:props.poesie}

				})
			}
		>
			<Image source={props.uri} style={styles.img} />
			<Text style={styles.text}>{props.name}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'black',
        alignItems: 'center',
    },
    button: {
        height: 80,
        backgroundColor: 'transparent',
        opacity: 1,
        margin: 5,
        borderWidth: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    img: {
        width: 65,
        height: 65,
        marginHorizontal: 10,
        borderRadius: 30,
    },
});
