import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Conditions(){
    return(
        <View style={style.container}>
            <View style={style.condition}>
                <Feather name='wind' size={23} color="#1ed6ff" />
                <Text>7km/h</Text>
            </View>

            <View style={style.condition}>
                <MaterialCommunityIcons name='weather-sunset-up' size={23} color="#1ed6ff" />
                <Text>5h20</Text>
            </View>

            <View style={style.condition}>
                <MaterialCommunityIcons name='weather-sunset-up' size={23} color="#1ed6ff" />
                <Text>18h30</Text>
            </View>

            <View style={style.condition}>
                <Feather name='droplet' size={23} color="#1ed6ff" />
                <Text>65</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginTop: 15,
        padding:10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-around',
        borderRadius: 8
    },
    condition:{
        alignItems: 'center',
        justifyContent: 'center'
    }
})