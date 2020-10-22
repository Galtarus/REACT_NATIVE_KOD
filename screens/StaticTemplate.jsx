import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Button } from '../components/Button';
import { images } from '../constants/images';
import { Background } from '../components/Background';
import { useLinkProps } from '@react-navigation/native';




export function StaticTemplate(props) {

    const bato = props.route.params.data ? props.route.params.data : [];

    return (
        <Background>
            <View style={styles.containter}>

                <Text style={styles.bold}>
                    {bato.name}
                </Text>

                <Image  source={bato.uri}
                        style={styles.image}
                />

                <Text style={styles.subtitle}>
                    {bato.subtext}
                </Text>

                <Text style={styles.body}>
                    {bato.poesie}
                </Text>



            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    bold: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    },
    body: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    subtitle:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    },
    containter:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image:{
        flex: 1,
        aspectRatio: 0.8,
        
        resizeMode: 'contain'
    }
});
