import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { Home } from "./views/Home";
import { Details } from "./views/Details";
import { NavigationContainer } from "@react-navigation/native";

const Stack= createStackNavigator()
export const App=() => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}