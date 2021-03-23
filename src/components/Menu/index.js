import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Menu(){
  const navigation = useNavigation();

    return(
        <TouchableOpacity style={style.container} onPress={() =>navigation.openDrawer() }>
            <Entypo
            name='menu'
            size={40}
            color='#373737'
            />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        position: 'absolute',
        zIndex: 9,
        width: 80,
        height: 80,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
        top: 40,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset:{
            width: 1,
            height: 3
        }
    }

});