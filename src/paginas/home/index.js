import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function Home(){
    const navigation = useNavigation();

    function paginaDetalhes() {
        navigation.navigate('Detalhes');

    }

return(

    <View>

    <Text> ESSA É PAGINA INICIAL </Text>

    <Button title = 'IR PARA DETALHES' onPress = {paginaDetalhes}/>


    </View>


);


}