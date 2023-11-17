import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from './views/Home';
import { Details } from './views/Details';
import { DrawerNavigator } from './navigation/drawer';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Drawer' component={DrawerNavigator}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
        <Stack.Screen name='Details' component={Details} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}