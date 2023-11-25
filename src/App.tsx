import React, { useState } from "react";
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const arrButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0',]
const arrOperators = ['+', '-', 'x', '/', '=']
const arrOperators2 = ['C', '+/-', '%']

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setresult] = useState('0');

  console.log('1', firstNumber);
  console.log('2', secondNumber);
  console.log('3', operator);

  const checkOperator = (a: string, b: string, opr: string) => {
    switch (opr) {
      case '+':
        return +a + +b;
      case '-':
        return +a - +b;
      case 'x':
        return +a * +b;
      case '/':
        return +a / +b;
      default:
        break;
    }
  };

  const operatorPress = (opr: string) => {
    if (arrOperators.includes(opr)) {
      basicOperator(opr);
    } else if (arrOperators2.includes(opr)) {
      specialOperator(opr);
    }
  };

  const specialOperator = (opr: string) => {
    switch (opr) {
      case 'C':
        setFirstNumber('');
        setSecondNumber('');
        setOperator('');
        setresult('0');
        break;
      case '+/-':
        if (firstNumber) {
          setFirstNumber((num) => (parseFloat(num) * -1).toString());
          setresult((parseFloat(firstNumber) * -1).toString());
        } else if (secondNumber) {
          setSecondNumber((num) => (parseFloat(num) * -1).toString());
          setresult((parseFloat(secondNumber) * -1).toString());
        }
        break;
      case '%':
        if (firstNumber) {
          const percentage = (parseFloat(firstNumber) / 100).toString();
          setFirstNumber(percentage);
          setresult(percentage);
        } else if (secondNumber) {
          const percentage = (parseFloat(secondNumber) / 100).toString();
          setSecondNumber(percentage);
          setresult(percentage);
        }
        break;
      default:
        break;
    }
  }


  const numberPress = (num: string) => {
    if (!secondNumber && !operator) {
      if (num === '.' && firstNumber === '') {
        setFirstNumber('0.');
        setresult('0.');
      }
      else if (num === '.' && firstNumber.includes('.')) {
        return;
      }
      else {
        setFirstNumber(firstNumber + num);
        setresult(firstNumber + num);
      }

    } else if (operator) {
      if (num === '.' && secondNumber == '') {
        setSecondNumber('0.');
        setresult('0.');
      }
      else if (num === '.' && secondNumber.includes('.')) {
        return;
      }
      else {
        setSecondNumber(secondNumber + num);
        setresult(secondNumber + num);
      }
    }
  };

  const basicOperator = (opr: string) => {
    if (firstNumber && secondNumber) {
      const oprResult = checkOperator(firstNumber, secondNumber, operator);
      setresult(String(oprResult));
      setFirstNumber(String(oprResult));
      setSecondNumber('');
      setOperator('');
    }
    console.log(opr);
    setOperator(opr);
  };

  const deleteLastDigit = () => {
    if (!secondNumber && !operator) {
      if (firstNumber.length === 1) {
        setFirstNumber('');
        setresult('');
      } else {
        setFirstNumber(firstNumber.slice(0, -1));
        setresult(firstNumber.slice(0, -1));
      }
    } else if (operator) {
      if (secondNumber.length === 1) {
        setSecondNumber('');
        setresult('');
      } else {
        setSecondNumber(secondNumber.slice(0, -1));
        setresult(secondNumber.slice(0, -1));
      }
    }
  };
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.actionArea}>
        <View style={styles.oprButtArea}>
          <View style={styles.specialOprContainer}>
            {arrOperators2.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.specialOprButton}
                  onPress={() => operatorPress(item)}>
                  <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <View style={styles.buttons}>
            {arrButtons.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.button}
                  onPress={() => numberPress(item)}>
                  <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
              );
            })}
            <View style={styles.deleteButtonArea}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={deleteLastDigit}>
                <Image source={require('./assets/icons/DeleteIcon.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.oprArea}>
          {arrOperators.map((item, index) => {
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
    marginTop: 40,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 0.6,
    marginHorizontal: 15,
    backgroundColor: 'black'
  },
  resultText: {
    color: 'white',
    fontSize: 90,
  },
  buttons: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'center',
  },
  button: {
    width: '27%',
    height: 75,
    backgroundColor: '#2E2F38',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 6,
  },
  oprButton: {
    width: '85%',
    height: 75,
    backgroundColor: '#4B5EFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 6,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
  actionArea: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  oprArea: {
    width: '22%',
    alignItems: 'center',
    backgroundColor: 'black',
    marginLeft: 10,
  },
  specialOprContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    width: '80%',
    marginTop: 100,
    marginLeft: 5,
  },
  specialOprButton: {
    backgroundColor: '#4E505F',
    borderRadius: 30,
    width: '27%',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
  },
  oprButtArea: {
    marginLeft: 5,
    marginRight: -75,
    marginTop: -100,
  },
  deleteButton: {
  },
  deleteButtonArea: {
    backgroundColor: '#2E2F38',
    width: '27%',
    height: 75,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
})