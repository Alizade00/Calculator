import React, { useState } from "react";
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const arrButtons =['7','8','9','4','5','6','1','2','3', '0']
const arrOperators=['+','-','*','/', '=']

function App() {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [operator, setOperator] = useState();
  const [result, setresult] = useState(0);

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View>
        < View>
        {arrButtons.map(() =>{
          return(
            <TouchableOpacity>
              
            </TouchableOpacity>
          )
        })}
        </View>
      </View>
    </SafeAreaView>
  )
}
export default App

const styles=StyleSheet.create ({
  area: {
    flex:1,
    backgroundColor: 'black'
  },
  result: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 0.40
  },
  resultText: {
    color: 'white',
    fontSize:90,
  },
})