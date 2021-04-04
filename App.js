import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import React,{Component}from 'react';
 import Splash from './Splash.js';
 import Find_Institute from './Find_Institute';
 import App_Login from './App_Login';
 import Header_Find_Institute from './Header_Find_Institute';
 import Admission from './Admission';
 import Image_Slider from './Image_Slider';
import Scholarships from './Scholarships';
import Navigator from './Navigator';
import TabNavigator from "./Navigator";
import PickerClass from "./PickerClass.js";
import Drawer from './Raw.js'
import OUTPUTCLASS_2 from "./OUTPUTCLASS_2.js";
import OUTPUTCLASS from "./OUTPUTCLASS.js"
import OUTPUTCLASS_3 from "./OUTPUTCLASS_3.js";
  

 const App=createStackNavigator({
     Splash:{screen:Splash,navigationOptions:{headerShown:false}},

    //App_Login:{screen:App_Login,navigationOptions:{header:null}},
    Find_Institute:{screen:Find_Institute,navigationOptions:{headerShown:false}},
    OUTPUTCLASS:{screen:OUTPUTCLASS,navigationOptions:{headerShown: false}},
    OUTPUTCLASS_2:{screen:OUTPUTCLASS_2,navigationOptions:{headerShown: false}},
    OUTPUTCLASS_3:{screen:OUTPUTCLASS_3,navigationOptions:{headerShown: false}},
    MainTabScreen:{screen:TabNavigator,navigationOptions:{header:null}}
    
    //Header_Find_Institute:{screen:Header_Find_Institute,navigationOptions:{header:null}}
     // Admission:{screen:Admission,navigationOptions:{header:null}}
    // Raw:{screen:Drawer,navigationOptions:{header:null}}
      //Image_Slider:{screen:Image_Slider,navigationOptions:{header:null}}
  //    Comparision:{screen:Comparision,navigationOptions:{header:null}}
         //Scholarships:{screen:Scholarships,navigationOptions:{header:null}}
        // TabNavigator:{screen:TabNavigator,navigationOptions:{header:null}}
   //      Drawer:{screen: MyDrawerNavigator,navigationOptions:{header:null}}
   //PickerClass:{screen:PickerClass,navigationOptions:{header:null}}
 });
 export default createAppContainer(App);
