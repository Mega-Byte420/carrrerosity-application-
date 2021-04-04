

import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';
import Header_Find_Institute from './Header_Find_Institute'

import axios from 'axios'
var bg =require('./images/Post.jpg').toString()

class Admission extends Component {
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
    axios.get('http://192.168.0.102:2000/Admission')

      .then(res => {

        this.setState({
          user1: res.data,
        });

        console.log(res.user1)
      })
  }
  renderItem = ({ item }) => {
    return (
      <ScrollView>
        <TouchableOpacity style={{ flex: 1, flexDirection: "column", borderWidth: 3, marginTop: 10, marginBottom: 20, padding: 15 }}>

          <Image style={{ width: 100, height: 60, }}
            source={{ uri: item.Image }}
          />
          <View style={{ flex: 1, height: 100, width: 400 }}>

            <Text style={{ fontSize: 20, color: 'black', alignSelf: 'auto', marginTop: 15 }}>
              {item.University}
            </Text>
            <Text style={{ fontSize: 15, color: 'black', alignSelf: 'auto' }}>
              {item.Details}
            </Text>
            <Text style={{ marginTop: 10, fontSize: 15, color: 'black', alignSelf: 'baseline' }}>
              {item.Test_Date}
            </Text>

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

  componentDidMount() {

    axios.get("http://192.168.0.105:3000/Admission")

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






  render() {
    return (

      
        <View style={{ flex: 1, alignContent: 'center' }}>
          <Header_Find_Institute />
        
          <Image
            style={{ marginTop:35,height: 180, alignContent: 'center', borderWidth: 5,width:360
           }}
            source={ require('./images/Post.jpg')}
          />
         
          <View style={styles.Container0} >

          <ScrollView>
         
            <View Style={{ flex: 0.9, backgroundColor: 'skyblue', alignContent: 'center' }}>

            
              <View style={styles.container}>
                <FlatList
                  data={this.state.datasource}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  //keyExtractor={(item,index)=>index.id}


                  ItemSeparatorComponent={this.renderSeparator}
                >

                </FlatList>



                <TouchableOpacity>
                  <View style={styles.Search_Now_Button}>
                    <Button
                      textAlign='center'
                      color='#00ffff'
                      fontWeight='bold'
                      textAlign='center'
                      justifyContent='center'
                    >
                      <Text style={{ fontSize: 22 }}>SEARCH</Text>

                    </Button>
                  </View>




                </TouchableOpacity>

              </View>
         
            </View>
            </ScrollView>

          </View>
         </View>

       
    )

  }
}

export default Admission;
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

      width: "100%",
      fontWeight: 'bold',
      borderWidth: 2,
      borderRadius: 6,
      marginTop: '12%',
      

    },




  });
