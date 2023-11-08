import React, { useState } from "react";
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const arrButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']
const arrOperators = ['+', '-', '*', '/', '=']

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setresult] = useState('0');

  console.log('1', firstNumber);
  console.log('2', secondNumber);
  console.log('3', operator);

  const checkOperator = (a, b, opr) => {
    switch (opr) {
      case '+':
        return +a + +b;
      case '-':
        return +a - +b;
      case '*':
        return +a * +b;
      case '/':
        return +a / +b;
      default:
        break;
    }
  };

  const numberPress = (num: string) => {
    if(!secondNumber && !operator) {
      setFirstNumber (firstNumber + num);
      setresult(firstNumber + num);
    } else if (operator) {
      setSecondNumber(secondNumber +num);
      setresult(secondNumber + num);
    }
  };

  const operatorPress = (opr: string) => {
    if(firstNumber && secondNumber) {
      const oprResult = checkOperator(firstNumber, secondNumber, operator);
      setresult(oprResult);
      setFirstNumber(oprResult);
      setSecondNumber('');
      setOperator('');
    }
    console.log(opr);
    setOperator(opr);
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.actionArea}>
        <View style={styles.buttons}>
          {arrButtons.map((item, index) => {
            function numberPress(item: string): void {
              throw new Error("Function not implemented.");
            }

            return (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={()=> numberPress(item)}>
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.oprArea}>
          {arrOperators.map((item, index) => {
            function operatorPress(item: string): void {
              throw new Error("Function not implemented.");
            }

            return (
              <TouchableOpacity
                key={index}
                style={styles.oprButton}
                onPress={() => operatorPress(item)}>
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}
export default App

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: 'black'
  },
  result: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 0.40
  },
  resultText: {
    color: 'white',
    fontSize: 90,
  },
  buttons: {
    backgroundColor: 'aqua',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '70%',
    justifyContent: 'center',
  },
  button: {
    width: '30%',
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  oprButton: {
    width: '70%',
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
  },
  actionArea: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  oprArea: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: 'aqua'
  },
})