/*import React, { Component, useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';
import Header_Find_Institute from './Header_Find_Institute'
import axios from 'axios'

class PickerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      PickerUser: '',
    }
  }
  updatePickerUser = (PickerUser) => {
    this.setState({ PickerUser: PickerUser })
  }


  SubmitData() {
    this.componentDidMount();
  }
  componentDidMount() {
    axios.get("http://localhost:3000/UDN").then(res => {
      this.setState({
        users: (res.data)
      });
      console.log(this.state.users)
    });
  }




  render() {
    return (
      <View style={{
        backgroundColor: 'skyblue', borderWidth: 2,
        borderRadius: 6, height: 550
      }}>



        <Picker mode="dropdown" 

        >
          {
            this.state.users.map((data, i) =>

              <Picker.Item
                
               key={i}
                label={data.SelectInstitute}
                value={data.SelectInstitute[0]}
              >
                <Text>Select Institute</Text>

              </Picker.Item>








            )
          }
        </Picker>


      </View>


    )
  }
}
export default PickerClass;*/

/*import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker'
import { View, StyleSheet } from "react-native";
import Video from 'react-native-video';

export default class Raw extends Component {

  render() 
  {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Video source={{ uri: "Url" }}   // Can be a URL or a localfile.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onEnd={this.onEnd}                      // Callback when playback finishes
            onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo} />
        </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Drawer } from "react-native-material-drawer";

const styles = {
  container: {
    width: "100%",
    height: "100vh",
  },
  body: {
    backgroundColor: "#eee",
    height: "100vh",
  }
};

export default class New_Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Drawer
          open={this.state.isOpen}
          drawerContent={
            <View>
              <Text></Text>
              <Text>-{'\n'}</Text>
              <Text>-{'\n'}</Text>
              <Text>Careerosity App</Text>
              <Text>Admission</Text>
              <Text>Login</Text>
              <Text>Scholarships</Text>
              <Text>Find Institute</Text>
           
            </View>
          }
          onClose={() => this.setState({ isOpen: false })}
          animationTime={250}
        >
          <View style={styles.body}>
            <View
              style={{
                marginTop: 20,
                alignItems: "center",
                width: "100%",
                flex: 1
              }}
            >
              <Text style={{ marginBottom: 20 }}>This is a page</Text>
              <TouchableOpacity
                onPress={() => this.setState({ isOpen: !this.state.isOpen })}
              >
                <Text>Toggle</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Drawer>
      </View>
    );
  }
}*/
import React, {Component} from 'react';
import {View, Dimensions, Animated, Easing, Button, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';


export default class Drawer extends Component{

  constructor(){
    super();
    this.state = {
      width:  0,
      height: 0,
      status: "close"
    }
    this.open  = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  componentDidMount(){
   var {width, height} = Dimensions.get('window');
   this.setState({width: width, height: height});
   
   this.defaultTopRightView = -width;

   this.scaleInner  = new Animated.Value(0.01);
   this.scaleOutter = new Animated.Value(0.01);
   this.closeTop    = new Animated.Value(100);
   this.opacity     = new Animated.Value(.3);
   this.sideMenuTop = new Animated.Value(-500);
   this.topRightView = new Animated.Value(this.defaultTopRightView);

  }


  open(){
    const {scaleInner, scaleOutter, closeTop, opacity, sideMenuTop, topRightView, defaultTopRightView} = this;
    this.setState({status: "transition"}, ()=>{
      this.props.openStart && this.props.openStart()
      Animated.parallel([
        Animated.timing(scaleOutter, {toValue: 1, duration: 350, useNativeDriver: true, easing: Easing.out(Easing.quad)}),
        Animated.timing(scaleInner,  {toValue: 1, duration: 450, useNativeDriver: true, easing: Easing.out(Easing.quad)}),
        Animated.timing(opacity,     {toValue: 1, duration: 300, useNativeDriver: true}),
        Animated.timing(sideMenuTop, {toValue: 0, duration: 250}),
        Animated.timing(closeTop,    {toValue: 0, duration: 350, easing : Easing.cubic}),
        Animated.timing(topRightView, {toValue: defaultTopRightView + 150, duration: 200}),

      ]).start(()=>{
        this.props.openEnd && this.props.openEnd()
        this.setState({status:"open"});
      });
    }); 
  }

  close(){
    const {scaleInner, scaleOutter, closeTop, opacity, sideMenuTop, topRightView, defaultTopRightView} = this;
    this.setState({status: "transition"}, ()=>{
      this.props.closeStart && this.props.closeStart()
      Animated.parallel([
        Animated.timing(scaleOutter, {toValue: 0.01,   duration: 450, useNativeDriver: true}),
        Animated.timing(scaleInner,  {toValue: 0.01,   duration: 300, useNativeDriver: true}),
        Animated.timing(opacity,     {toValue: 0.3,    duration: 300, useNativeDriver: true}),
        Animated.timing(sideMenuTop, {toValue: -500,   duration: 200}),
        Animated.timing(closeTop,    {toValue: 100,    duration: 350, easing : Easing.cubic}),
        Animated.timing(topRightView, {toValue: defaultTopRightView,   duration: 200})
      ]).start(()=>{
        this.props.closeEnd && this.props.closeEnd()
        this.setState({status: "close"});
      });
    });
  }

  renderMenu(){
    if(this.props.sideMenu){
      return this.props.sideMenu;
    }
  }

  renderTopRightView(){
    if(this.props.topRightView){
      return this.props.topRightView;
    }
  }

  renderDrawer(){

    const {primaryColor, secondaryColor, cancelColor, marginLeft, marginTop} = this.props;
    const {scaleInner, scaleOutter, opacity, closeTop, sideMenuTop, topRightView} = this;
    const {status, width, height} = this.state;

    const mL = marginLeft;          // marginLeft of the middle of the circle
    const mT = marginTop;           // marginTop  of the middle of the circle
    
    const cDiam = (width + height) - (mL + mT); // circle diameter
    const right = cDiam/2 - mL;  
    const top   = -cDiam/2 + mT;

    if(status != "close" ){
      return(
        <View style={{width:"100%", height:"100%", position:"absolute", zIndex:999}}>
         
          <View style={{width:"100%", height:"100%", position:"absolute"}}>
            <Animated.View style={{opacity:opacity ,transform:[{scale:scaleOutter}], width:cDiam, height:cDiam, right:right, top:top, borderRadius:height*2, backgroundColor: secondaryColor}}>
            </Animated.View>
          </View>
          
          <View style={{width:"100%", height:"100%", position:"absolute"}}>
            <Animated.View style={{opacity:opacity, transform:[{scale:scaleInner}], width:cDiam - 175, height:cDiam, right:right -175/2, top:top , borderRadius:height*2, backgroundColor: primaryColor}}>
            </Animated.View>
          </View>

          {/*CANCEL BOUTON*/}
          <View style={{width:"100%", height:"100%", position:"absolute",alignItems:"center",justifyContent:"flex-end"}}>
            <Animated.View style={{top:closeTop, alignItems:"center", justifyContent:"center", marginBottom:25,width:50, height:50, borderRadius:50, backgroundColor: cancelColor, elevation:2}}>
              <TouchableOpacity style={{width:50, height:50, justifyContent:"center",alignItems:"center"}} onPress={this.close}>
                <View style={{width:50, height:50, justifyContent:"center",alignItems:"center"}}>
                  <View style={{transform:[{rotateZ:"45deg"}],width:30,height:5, borderRadius:30,top:4, backgroundColor:"white"}}></View>
                   <View style={{transform:[{rotateZ:"-45deg"}],width:30,height:5, borderRadius:30,bottom:1, backgroundColor:"white"}}></View>  
                </View>           
              </TouchableOpacity>
            </Animated.View>
           </View>

          <View style={{width:"100%", height:"100%", position:"absolute"}}>
            <Animated.View style={{width:150, height:80, right: topRightView, top:0}}>
              {this.renderTopRightView()}
            </Animated.View>
          </View>

          <View style={{width:"100%", height:"100%", position:"absolute"}}>
            <Animated.View style={{width:cDiam / 3.7, height:cDiam /2.6, paddingTop:30, paddingLeft:30, top:sideMenuTop}}>
             <View style={{width:"100%", height:"100%"}}>
              {this.renderMenu()}
             </View>
            </Animated.View>
          </View>

        </View>
      );
    }
  }

  render() {
    return (
      <View style={{flex: 1,width:"100%", height:"100%"}}>
        <View style={{flex:1, width:"100%", height:"100%",zIndex:0}}>
          {this.props.children}
        </View>
        {this.renderDrawer()}
      </View>
    );
  }
}

Drawer.propTypes = {
  primaryColor:   PropTypes.string,
  secondaryColor: PropTypes.string,
  cancelColor:    PropTypes.string,
  marginLeft:     PropTypes.number,
  marginTop:      PropTypes.number,
  openStart:      PropTypes.func,
  openEnd:        PropTypes.func,
  closeStart:     PropTypes.func,
  closeENd:       PropTypes.func,
};

Drawer.defaultProps  = {
  marginLeft:     0,
  marginTop:      0,
  primaryColor:   "#731ED2",
  secondaryColor: "#9646EC",
  cancelColor:    "#731ED2"
};
