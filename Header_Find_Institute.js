import React,{Component} from 'react';
import { View,StyleSheet,Text } from 'react-native';
//import { Header } from "react-native";
import {createStackNavigator} from 'react-navigation-stack';
import App_Login from './App_Login';
 
  
 class Header_Find_Institute extends Component{

     render(){

          return(
               
                <View style={{flex:0.1,backgroundColor:'gold',height:'3%',width:'100%'}}>
                <Text 
                style={{marginTop:15,textAlign:"center",fontWeight:"bold",fontSize:40,borderStyle:'solid',backgroundColor:'gold'}
               
               }
                >Careerosity</Text>
                </View>
               
          )
     }
}
 const styles=StyleSheet.create({

     container:
     {
          
             
          //justifyContent:'center',
          //alignItems:'center',
     }
 });
export default Header_Find_Institute;