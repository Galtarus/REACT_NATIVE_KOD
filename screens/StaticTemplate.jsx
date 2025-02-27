import { StyleSheet, Text, View,Image } from 'react-native';
import { Background } from '../components/Background';
import React from 'react';

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
        flex: 0.2,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    },
    image:{
        flex: 1.6,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginBottom:10
    },
    subtitle:{
        flex: 0.4,
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    body: {
        flex: 1.2,
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },
    
    containter:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 25
    },
    
});
