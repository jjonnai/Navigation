import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import App from "./App";


export default function HomeScreen({navigation}) {
    const [message, setMessage] = useState('Testing')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#ffccff'
            },
            headerRight: () => (
                <AntDesign
                style={styles.navButton}
                name="arrowright"
                size={24}
                onPress={() => navigation.navigate('Second', {message: message})}   
                />
            )
        })
    }, [message])

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TextInput onChangeText={text => setMessage(text)} value={message} placeholder="Type message here">

            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
        backgroundColor: '#ffe6ff',
    },
    navButton: {
        marginRight:5,
        padding:4,
    }
});