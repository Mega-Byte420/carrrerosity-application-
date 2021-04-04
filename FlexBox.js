import React from 'react';
 import {View,StyleSheet,Text,TextInput } from 'react-native';
 
class Comp extends React.Component ()
{
  render()
  {
    return(

      <View style={styles.container}>
        <View styles={StyleSheet.container}/>
      <TextInput
      style={{fontSize:30,height:40}}
      placeholder="Type Here"
      />
      <Text style={{fontSize:30}}>Hello Brother</Text>
      
      </View>
    );
  }

}
const styles=StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor:"yellow",
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center"
  },
  text:{
    
    fontSize:30,
    height:80,
    borderWidth:5,
    backgroundColor:"skyblue",
    textShadowColor:"white",
    textAlign:'center',
    padding:"10"
 
     
  }
  
  
   
 });
  export default Comp 
  