import React, { component } from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Admission from './Admission';
import Comparision from "./Comparision"
//import DrawerContent from "@react-navigation/drawer";



const MainScreenNavigator = StackNavigator({
    Admission: { screen: Admission },
    Comparision: { screen: Comparision }
});
const Drawer = DrawerNavigator(
    {
        Main: { screen: MainScreenNavigator }
    },
    {
        contentComponent: DrawerMenu,
    }
);

export default DrawerNavigator( Drawer);