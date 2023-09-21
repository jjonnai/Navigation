import React, { useLayoutEffect, useEffect } from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";

export default function SecondScreen({route, navigation}) {
    useEffect(() => {
      if (route.params?.message){
        alert(route.params.message)
      }
      BackHandler.addEventListener('hardwareBackPress', close);
      return() => {
        BackHandler.removeEventListener('hardwareBackPress', close);
      }
    }, [])

    function close() {
        navigation.goBack(null);
        return true;
    }
    

useLayoutEffect(() => {
    navigation.setOptions({
        headerStyle: {
            backgroundColor: '#ffccff'
        }
    })
}, [])

    return ( 
    <View style = {styles.container}>
        <Text>Second screen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 15,
        backgroundColor: '#ffe6ff'
    }
})