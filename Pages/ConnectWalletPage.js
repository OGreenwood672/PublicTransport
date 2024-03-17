// {
//     "username": "Greenwood",
//     "walletAddress": ""
// }
import React, { useState } from 'react';

import { View, StyleSheet, TextInput, Text } from "react-native";

import Button from '../components/button';


export default function ConnectWalletPage({ route, navigation}) {

    const [name, setName] = useState('');
    const [wallet, setWallet] = useState('');

    function handleFormSubmit() {
        navigation.navigate('Home', { name: name, walletAddress: wallet })
    }

    return (
        <View style={{alignItems: "center"}}>

            <View style={{marginTop: 40}} />


            <View style={{marginTop: "50%"}} />

            <Text style={styles.title}>EcoNex</Text>    

            <View style={styles.container}>
                <Text style={styles.input_label}>Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={{marginTop: 30}} />

            <View style={styles.container}>
                <Text style={styles.input_label}>Wallet Address:</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Wallet Address"
                    value={wallet}
                    onChangeText={setWallet}
                />
            </View>

            <View style={{marginTop: 20}} />

            {
            Button(
                "Continue",
                "white",
                "black",
                300,
                50,
                handleFormSubmit
            )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    title: {
        padding: 10,
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 35,
    },
    input: {
        width: "70%",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        width: 300,
        marginBottom: 20,
    },
    input_label: {
        fontSize: 20,
        marginBottom: 8,
        fontWeight: "bold",
    },
})