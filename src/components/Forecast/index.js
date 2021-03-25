import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {condition} from '../../utils/conditions'


export default function Forecast({data}){
    let icons = condition(data.condition)
    return(
        <View style={style.container}>
            <Text style={style.date}>{data.weekday}</Text>
            <Ionicons name={icons.name} color={icons.color} size={25}/>
            <View style = {style.temp}>
                <Text>{data.min}°</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>{data.max}°</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        marginLeft: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    date:{
        fontSize: 14,

    },
    temp:{
        alignItems: 'center',

    }
})