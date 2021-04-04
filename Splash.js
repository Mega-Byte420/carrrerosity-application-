import React,{Component}from 'react';
import {Image,ImageBackground,View} from 'react-native';   
import Find_Institution from './Find_Institute';
import TabNavigator from './Navigator'; 
import MainScreen from './TabNavigator'

var bg=require('./images/New.jpg');
 var logo=require('./images/logo.png');

 class Splash extends Component
 {
         constructor(props)
         {
                 super(props);
         
         setTimeout(()=> 
         {
          this.props.navigation.navigate("MainTabScreen") 
         }, 5000);
        }
    render()
         {

                 return(
                        
                        <ImageBackground
                        source={bg}
                        style={{width:"100%",
                        height:"100%"}}
                        >
                                <View
                                style={{flex:1,justifyContent:'center',alignItems:'center'}}
                                >
                                         
                                <Image source={logo}
                                style={{height:150,width:150}}
                                ></Image>
                                </View>

                        </ImageBackground>
                 
                 );
         }
 }
        
 export default Splash;  

