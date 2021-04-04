import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNPickerSelect from 'react-native-picker-select';
import New from "./Api/db.json"
import Header_Find_Institute from './Header_Find_Institute';
import axios from "axios"
import OUTPUTCLASS from './OUTPUTCLASS'



const cData = require('./Api/db.json');

class Find_Institution extends Component {

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




  Api2(Value) {


    if (Value == "Undergraduate") {


  //    axios.get("http://localhost:3000/Data")
        //axios.get("http://192.168.0.110:2000/Select_Degree_Level")
        axios.get("http://192.168.0.105:2000/Data")
        .then(res => {
          this.setState({

            // allcars: {label:""+res.data,value:""+res.data,}
            user2: res.data
          });

        });

    }
    if (Value == "Graduate") {

      axios.get("http://192.168.0.105:2000/Graduate_Data")
      //axios.get("http://localhost:3000/Graduate_Data")
        .then(res => {
          this.setState({

            user2: res.data,

          });

        });

    }
    if (Value == "Postgraduate") {
      axios.get("http://192.168.0.105:2000/Postgraduate_Fields")
      //axios.get("http://localhost:3000/Postgraduate_Fields")

        .then(res => {
          this.setState({

            user2: res.data
          });






        });

    }
    if (Value == "Diplomas And Courses") {
      axios.get("http://192.168.0.102:2000/Diplomas").then(res => {
        this.setState({

          user2: res.data,

        });

      });

    }
  }
  componentDidMount() {
    this.Api1()


  }
  newMethod() {
    console.log("hello")
  }

  onTestPress = () => {
  
      if(this.state.Picker1selectedValue=="Undergraduate")
      {
      this.props.navigation.navigate('OUTPUTCLASS', { P1: this.state.selectedInstitute })
      }
      if(this.state.Picker1selectedValue=="Graduate")
      {
        this.props.navigation.navigate('OUTPUTCLASS_2', { P2: this.state.selectedInstitute })
        
      }
      if(this.state.Picker1selectedValue=="Postgraduate")
      {
        this.props.navigation.navigate('OUTPUTCLASS_3', { P3: this.state.selectedInstitute })
        
      }
   
  }
  render() {
    <OUTPUTCLASS
    
    selectedInstitute={this.state.selectedInstitute}
    />
    return (

      <View style={{ flex: 1 }}>
        <Header_Find_Institute />
        <Image
            style={{ marginTop:35,height: 180, alignContent: 'center', borderWidth: 5,width:360
           }}
            source={ require('./images/Find_Institute.jpg')}
          />
         
        <View style={{ flex: 1 }}>
          <View style={styles.Container0} >



            <View style={{ flex: 1, padding: 10 }}>
              <View
                style={styles.Container}



              >

                <Text style={styles.Text_For_Find_Institution}>FIND AN INSTITUTION</Text>


                <View style={styles.Container1_1}>
                  <View style={styles.View_Picker1}>


                    <Picker

                      //mode="dropdown"
                      selectedValue={this.state.Picker1selectedValue}

                      onValueChange={(itemValue) => {


                        this.setState({ Picker1selectedValue: itemValue })
                        console.log(itemValue)
                        this.Api2(itemValue)







                      }
                      }


                    >
                      <Picker.Item value="1" label="Select Degree Level" />

                      {

                        this.state.user1.map((data, i) =>
                          <Picker.Item
                            key={i}
                            label={data.SelectDegree}
                            value={data.SelectDegree}

                          >

                            <Text>Select Institute</Text>

                          </Picker.Item>
                        )
                      }

                    </Picker>

                  </View>
                </View>


                <View style={styles.Container1_2}>
                  <View style={styles.View_Picker2}>

                    <Picker
                      Placeholder2={this.Placeholder2}
                      //  mode="dropdown"
                      selectedValue={this.state.selectedInstitute}
                      onValueChange={(item, itemindex) => {
                        this.setState({ selectedInstitute: item })
                        console.log(item)
                      }



                      }

                    >
                                            <Picker.Item value="1" label="Select An Academic Program" />

                      {


                        this.state.user2.map((data, i) =>


                          <Picker.Item
                            key={i}
                            label={data.Select_An_Academic_Program}
                         
                            value={data.Label}

                          //onChangeText={text => setInstitute(text)}


                          >
                            <Text>Select Institute</Text>


                          </Picker.Item>

                        )
                      }



                    </Picker>
                     

                  </View>
                </View>


                 
                <View>


                  <TouchableOpacity>
                    <View style={styles.Search_Now_Button}>
                      <Button
                        textAlign='center'
                        color='#00ffff'
                        mode="contained"

                        onPress={() => this.onTestPress()}
                      >

                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Select</Text>

                      </Button>
                    </View>




                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>
        </View>
      </View >

    );
  }

}
export default Find_Institution;
const styles = StyleSheet.create(
  {

    Container0:
    {
      flex: 1,
      //justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 2,

      alignContent: 'center'
    }, Container:
    {
      flex: 1,
      borderWidth: 3,
      borderRadius: 20,
      //marginTop:20,
      flexDirection: 'column',

      //  borderWidth:2,
      // backgroundColor:'yellow'

    },
    Container1:
    {
      borderWidth: 5,
      borderRadius: 10,
      height: 55,
      backgroundColor: 'powderblue',
      alignContent: 'center'
    },
    Container3_For_Outer_Border:
    {
      flex: 0.3,
      padding: 150,
      borderWidth: 5,
      alignItems: 'center',

    }


    , CreateText:
    {
      fontFamily: 'bold',
      fontSize: 40,
      alignItems: 'center',
      textAlign: 'center',
    },

    Text_Input_SC:
    {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
      fontSize: 25,
      width: 350

    },
    //Input Container For Select City
    Input_Container_SC:
    {

      flex: 0.3,
      alignItems: "center",
      borderWidth: 0,
      height: 50,
      width: 350,
      padding: 10,
      borderRadius: 0,
      marginTop: 10
    },
    //Input Container For Degree Level
    Input_Container_Dl:
    {
      flex: 0.3,
      borderWidth: 0,
      alignItems: "center",
      height: 50,
      width: 325,
      padding: 10,

      borderRadius: 0,
      marginTop: 1
    },
    //Input Container For Academy Program

    Text_Input_DL:
    {
      fontSize: 30,
      width: 250,
    },
    Input_Container_Ap:
    {
      flex: 0.3,
      alignItems: "center",
      borderWidth: 0,
      height: 50,
      width: 325,
      padding: 10,
      borderRadius: 0,
      marginTop: 2
    },

    Text_Input_Ap:
    {
      flexDirection: 'column',
      textAlign: 'left',
      alignContent: 'center',
      fontSize: 25,
      width: 350

    },
    //Text OF Find Institution
    Text_For_Find_Institution:
    {
      //fontFamily: 'Sans-Serif',
      fontSize: 20,
      marginTop: 15,
      textAlign: 'center',
      //borderWidth: 3,
      //backgroundColor: '#00ffff'

    },
    View_Picker1:
    {
      //  flex:0.3,
      borderRadius: 4,
      borderWidth: 1,

    }, View_Picker2:
    {
      //flex:0.3,
      borderRadius: 4,
      borderWidth: 1,

    }, View_Picker3:
    {
      // flex:0.3,
      borderRadius: 4,
      borderWidth: 1,

    },
    Container1_1:
    {

      marginTop:10,
      flex: 0.3,
      backgroundColor: "#fff",
      padding: 20,
      //margin: 10,
      alignContent: 'center'
    },
    Container1_2:
    {
      flex: 0.3,

      backgroundColor: "#fff",
      padding: 20,
      // margin: 10,
      alignContent: 'center'
    }, Container1_3:
    {
      flex: 0.3,
      backgroundColor: "#fff",
      padding: 20,
      //margin: 10,
      alignContent: 'center'
    },
    button:
    {
      width: 325,
      borderColor: '#129793',
      borderWidth: 1,
      height: 50,
      padding: 10,
      borderRadius: 24,
      marginTop: 20,
      backgroundColor: '#129793',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#129793',
    },
    SignUp_Button:
    {
      width: 350,
      height: 100,

    },
    Search_Now_Button:
    {
      width: "90%",
      fontWeight: 'bold',
      alignItems: 'center',
      borderWidth: 2,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: "aqua"


    },
    Button_text:
    {
      fontSize: 25
    }

  });
 /*import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => (
<View style={styles.container}>
<Text style={styles.title}>React Native</Text>
</View>
);

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 200,
backgroundColor: "#eaeaea"
},
title: {
marginTop: 16,
paddingVertical: 25,
borderWidth: 4,
borderColor: "#20232a",
borderRadius: 6,
backgroundColor: "#61dafb",
color: "#20232a",
textAlign: "center",
fontSize: 30,
fontWeight: "bold"
}
});

export default App;*/