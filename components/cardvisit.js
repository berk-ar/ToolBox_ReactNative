import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardVisit = ({ profilFoto, adSoyad, email }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: profilFoto }} style={styles.profilImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.adSoyadText}>{adSoyad}</Text>
                <Text>{email}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        width: '40%'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        paddingRight: 10,
    },
    profilImage: {
        width: 50,
        height: 50,
        borderRadius: 40,
    },
    textContainer: {
        flex: 2,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    adSoyadText: {
        fontWeight: 'bold',
    },
});

export default CardVisit;
