import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const mylist = [
      {
        "date": "24/03",
        "weekday": "Qua",
        "max": 26,
        "min": 18,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "25/03",
        "weekday": "Qui",
        "max": 24,
        "min": 20,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "26/03",
        "weekday": "Sex",
        "max": 26,
        "min": 18,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "27/03",
        "weekday": "Sáb",
        "max": 29,
        "min": 20,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "28/03",
        "weekday": "Dom",
        "max": 30,
        "min": 20,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "29/03",
        "weekday": "Seg",
        "max": 30,
        "min": 20,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "30/03",
        "weekday": "Ter",
        "max": 20,
        "min": 17,
        "description": "Tempestades",
        "condition": "storm"
      },
      {
        "date": "31/03",
        "weekday": "Qua",
        "max": 20,
        "min": 16,
        "description": "Trovoadas dispersas",
        "condition": "storm"
      },
      {
        "date": "01/04",
        "weekday": "Qui",
        "max": 21,
        "min": 16,
        "description": "Parcialmente nublado",
        "condition": "cloudly_day"
      },
      {
        "date": "02/04",
        "weekday": "Sex",
        "max": 22,
        "min": 17,
        "description": "Tempestades",
        "condition": "storm"
      }
    ];

export default function Home(){
    return(
        <SafeAreaView style={style.container}>
            <Menu/>

            <Header/>

            <Conditions/>

            <FlatList
            horizontal = {true}
            contentContainerStyle= {{paddingBottom: '5%'}}
            style={style.list}
            data={mylist}
            keyExtractor = {item => item.date}
            renderItem = {({item}) => <Forecast data={item}/> }
            />

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%',
    },
    list:{
        marginTop:10,
        marginLeft:10
    }

});
