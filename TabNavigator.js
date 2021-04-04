import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Admission"
        activeColor="#fff"
    >
    <Tab.Screen
    name="Explore"
    component={Admission}
    />


    </Tab.Navigator>
)
export default MainTabScreen;