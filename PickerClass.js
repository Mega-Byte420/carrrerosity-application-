import React, { Component, useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';
import Header_Find_Institute from './Header_Find_Institute'
import axios from 'axios'
 
class PickerClass extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            email: ''
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3000/user")

            .then((ambilData) => {
                console.log(ambilData.Select);
                this.setState({
                    data:ambilData.Select,
                })
            })
    


    }
    render() {
        return (

            <View style={{ flex: 1, alignContent: 'center' }}>
                <Header_Find_Institute />
                <View style={styles.Container0} >


                    <View Style={{ flex: 0.9, backgroundColor: 'skyblue', alignContent: 'center' }}>
                        <View >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                    textAlign: 'center',
                                    borderWidth: 3,
                                    backgroundColor: '#00ffff'

                                }}
                            >
                                Admission</Text>
                        </View>





                        <View style={{
                             backgroundColor: 'skyblue',borderWidth: 2,
                            borderRadius: 6,height:550
                        }}>
                            {

                                this.state.data.map((item) =>
                                    <View>
                                        <Text>{item.email}</Text>
                                        <Text>{item.password}</Text>
                                    </View>
                                )
                            }
                        </View>


                    </View>
                </View>
            </View >


        )
    }

}


export default PickerClass;
const styles = StyleSheet.create(
    {

        Container0:
        {
            flex: 0.8,
            //justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 2,
            //margin: 10,
            alignContent: 'center'
        },
        View_Picker1:
        {

            padding: 20,
            flex: 0.9,
            flexDirection: 'column',
            marginLeft: 30,
            marginTop: 10,
            width: '85%',
            backgroundColor: '#fff',
            backgroundColor: '#fff'
        }
        , View_Picker2:
        {

            padding: 20,
            flex: 0.5,
            flexDirection: 'column',
            marginLeft: 30,
            marginTop: 30,
            width: '85%',
            backgroundColor: '#fff',
            backgroundColor: '#fff'
        }, Search_Now_Button:
        {

            width: "50%",
            fontWeight: 'bold',
            borderWidth: 2,
            borderRadius: 6,
            marginLeft: '25%',
            marginRight: 20,
            marginTop: '12%',

        },




    });

