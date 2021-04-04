import React, { Component, useState } from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import Find_Institution from './Find_Institute';
import axios from "axios"
import { selectedInstitute } from "./Find_Institute"




class OUTPUTCLASS extends Component {
    constructor() {
        super()
        this.state =
        {
            datasource: [],
            isLoading: true,
            
        }
    }
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: "column", borderWidth: 3 }}>
                <Image style={{ width: 150, height: 100, marginBottom: 10 }}
                    source={{ uri: item.Image }}
                />
                <View style={{ flex: 1,flexDirection:'row' }}>

                    <Text style={{ fontSize: 20, color: 'black'}}>
                        {item.University}
                    </Text>
                    <Text style={{ fontSize: 15, color: 'black' }}>
                        {item.Details}
                    </Text>
                    <Text style={{ fontSize: 15, color: 'black' }}>
                        {item.Test_Details}
                    </Text>

                </View>
            </TouchableOpacity>
        )

    }
    renderSeparator = () => {
        return (
            <View
                style={{ height: 1, width: '100%', backgroundColor: 'black' }}
            >

            </View>
        )
    }
    UNDERGRADUATE_API_METHOD() {

        // this.props.navigation.state.params.P1

        axios.get("http://localhost:8000/Accelerated_occupational_Therapy")
            .then((responseJson) => {
                this.setState({
                    datasource: responseJson.data,
                    isLoading: false
                })

            })
            .catch((error) => {
                console.log(error)
            })

        {
            this.props.navigation.state.params.P2

            axios.get("http://localhost:8000/Accounts & Finance")
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
    }
    componentDidMount() 
    {
        var a=this.props.navigation.state.params.P1
        

       //axios.get("http://localhost:8000/"+a)
     //  http://192.168.0.110:2000/Select_Degree_Level
       axios.get("http://192.168.0.105:3000/"+a)
           
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
    //this.props.navigation.state.params.newMethod()
     /* if(selectedInstitute == "Accounting & Finance")
     {
        axios.get("http://localhost:8000/Accounts_And_Finance")
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
    }*/

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: "column", borderWidth: 3 }}>
                <Image style={{ width: 150, height: 100, marginBottom: 10 }}
                    source={{ uri: item.Image }}
                />
                <View style={{ flex: 1,flexDirection:'row' }}>

                    <Text style={{ fontSize: 20, color: 'black'}}>
                        {item.University}
                    </Text>
                    <Text style={{ fontSize: 15, color: 'black' }}>
                        {item.Details}
                    </Text>
                    <Text style={{ fontSize: 15, color: 'black' }}>
                        {item.Test_Details}
                    </Text>

                </View>
            </TouchableOpacity>
        )

    }
    renderSeparator = () => {
        return (
            <View
                style={{ height: 1, width: '100%', backgroundColor: 'black' }}
            >

            </View>
        )
    }
    render() {
        return (
            /*this.state.isLoading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        size='large' color="#330066"
                    />
                </View>
                :*/
                <View style={style.container}>
                    <FlatList
                        data={this.state.datasource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString() }
//keyExtractor={(item,index)=>index.id}
                    
                        
                        ItemSeparatorComponent={this.renderSeparator}
                    >

                    </FlatList>
                </View>
        )
    }

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})
export default OUTPUTCLASS;