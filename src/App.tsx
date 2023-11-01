import React from "react";
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>0</Text>
      <Pressable style={({pressed}) =>({
        ...styles.button, 
        backgroundColor: pressed ? 'tomato' : 'black',
        opacity: pressed ? 0.5 : 1,
        height: pressed ? 60 : 40})}>
      <Text style={styles.buttonlabel}>Click me</Text>
      </Pressable>
      <Button title="Increment" />
      <Button title="Deccrement" />
    </SafeAreaView>
  )
}
export default App

const styles=StyleSheet.create ({
  main: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  text:{
    fontSize:50,
    fontWeight:'bold',
    color:'aqua',
  },
  button:{
    backgroundColor:'black',
    borderRadius: 100,
    width: '80%',
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonlabel: {
    color:'white',
    textTransform:'uppercase',
    fontWeight:'600'
  }
})