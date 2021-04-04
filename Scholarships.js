import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';
import axios from 'axios'
import Header_Find_Institute from './Header_Find_Institute';
import {Linking} from 'react-native'
const url='https://minorityaffairs.sindh.gov.pk/'
export default class Schorlarships extends React.Component {
    
    constructor(props) {

        super(props);
        this.state = {
            user1: [],
            user2: [],
            user3: [],
            PickerUser: '',
            New: [],
            Picker1selectedValue: 'Select Degree Level',
            selectedInstitute: '',
            dataSource: [],
            dataSource2: [],
            allcars: [],//ab karo
            mechanicsTemp: [],
            City: '',
            setInstitute: '',
            Placeholder2: "Select An Academic Program"


        }

    }




    Api1() {

        //axios.get('http://localhost:3000/New')
        axios.get('http://192.168.0.105:2000/New')

            .then(res => {

                this.setState({
                    user1: res.data,
                });

                console.log(res.user1)
            })
    }
    componentDidMount() {

        axios.get("http://192.168.0.105:3000/Scholarships")

            .then((responseJson) => {
                this.setState({
                    datasource: responseJson.data,
                    isLoading: false
                })

            })
            .catch((error) => {
                console.log(error)
            })


    }


    renderSeparator = () => {
        return (
            <View
                style={{ height: 3, width: '100%', backgroundColor: 'black' }}
            >

            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <ScrollView>
                
                <TouchableOpacity style={{ flex: 1, flexDirection: "column", borderWidth: 3, marginTop: 10, marginBottom: 20, padding: 15, backgroundColor: '#ffffff',height:450 }}>
                    <Text style={{ fontSize: 20, color: 'black', alignSelf: 'auto', marginTop: 15, fontWeight: 'bold' }}>
                        Sindh Government Minority Affair Scholarship 2020
                        </Text>

                    <View style={{ flex: 1, height: 100, width: 300 }}>

                        <Text style={{ fontSize: 15, color: 'black', textAlign: 'left', marginTop: 15, fontWeight: 'bold' }}>
                            City{'\n'}
                            {item.City}
                        </Text>

                        <Text style={{ fontSize: 15, color: 'black', textAlign: 'right', marginTop: 15, fontWeight: 'bold' }}>
                            Final DeadLine{'\n'}
                            {item.Final_Deadline}
                        </Text>
                        <Text style={{ fontSize: 15, color: 'black', textAlign: 'left', fontWeight: 'bold' }}>
                            CitizenShip{'\n'}
                            {item.Citizenship}
                        </Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: 'black', textAlign: 'right', fontWeight: 'bold' }}>
                            Degree Level{'\n'}
                            {item.Degree_Level}
                        </Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: 'black', textAlign: 'left', fontWeight: 'bold' }}>
                            Scholarship Type{'\n'}
                            {item.Scholarship_type}
                        </Text>

                        <Text style={{ marginTop: 10, fontSize: 15, color: 'black', textAlign: 'right', fontWeight: 'bold' }}>
                            Intake Year{'\n'}
                            {item.Intake_Year}
                        </Text>
                        <View
                            style={{marginRight:35,height: 3, width: '170%', backgroundColor: 'black' }}
                        >

                        </View>

                        <TouchableOpacity style={{width:'100%',paddingRight:50,paddingHorizontal:50}}>
                            <View style={styles.Search_Now_Button}>
                                <Button
                                    textAlign='center'
                                    color='#00ffff'
                                    fontWeight='bold'
                                    textAlign='center'
                                    justifyContent='center'
                                    borderRadius={2}
                                    borderWidth={4}
                                    onPress={() => Linking.openURL('https://minorityaffairs.sindh.gov.pk/')}
                                >
                                    <Text style={{ fontSize: 12 }}>View & Apply</Text>

                                </Button>
                            </View>




                        </TouchableOpacity>




                    </View>

                </TouchableOpacity>
             </ScrollView>
        )

    }
    renderSeparator = () => {
        return (
            <View
                style={{ height: 2, width: '100%', backgroundColor: 'black' }}
            >

            </View>
        )
    }

    render() {


        return (
            <View style={{ flex: 1, alignContent: 'center' }}>
                <Header_Find_Institute />

                <Image
                    style={{
                        marginTop: 35, height: 170, alignContent: 'center', borderWidth: 5, width: 400
                    }}
                    source={require('./images/Scholarships.jpg')}
                />

                <View style={styles.Container0} >

                    <ScrollView>

                        <View Style={{ flex: 0.9, backgroundColor: '#ffffff', alignContent: 'center' }}>


                            <View style={styles.container}>
                                <FlatList
                                    data={this.state.datasource}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                    //keyExtractor={(item,index)=>index.id}


                                    ItemSeparatorComponent={this.renderSeparator}
                                >

                                </FlatList>




                            </View>

                        </View>
                    </ScrollView>

                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF'
        },
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
            borderRadius: 2,
            marginTop: '12%',
            
            marginLeft: '60%',
            
             
        },




    });
