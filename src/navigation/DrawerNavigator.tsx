import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'
import { Details } from "../views/Details";
import { Home } from "../views/Home";

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return(
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name='HomeDrawer' component={Home}  />
            <Drawer.Screen  options = {{headerShown:false}} name='DetailsDrawer' component={Details} />
        </Drawer.Navigator>
    )
}