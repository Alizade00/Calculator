import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export const Details = () => { 
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    count !== 0 && setCount(count - 1)
  };


  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };


  return (
    <SafeAreaView style={styles.area}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={goBack} style={styles.header}>
          <Image style={{ marginLeft: 30, marginTop: 68 }} source={require('../assets/icons/Back.png')} />
        </TouchableOpacity>
        <Image style={styles.plant} source={require('../assets/images/Plant2.png')} />
        <Image style={{ marginRight: 35, marginTop: 52 }} source={require('../assets/icons/Like.png')} />
      </View>
      <View style={styles.text}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ marginLeft: 30, fontSize: 24, fontWeight: '800', color: 'black' }}>Astrophytum</Text>
            <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }}>$312.00</Text>
          </View>
          <View style={styles.selectButton}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={minus}>
              <Text style={{ fontSize: 25, color: 'black', fontWeight: '300' }}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }}>{count}</Text>
            <TouchableOpacity onPress={plus}>
              <Text style={{ fontSize: 25, color: 'black', fontWeight: '300' }}>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.selectPot}>SELECT POT</Text>
            <View style={styles.pot}>
              <Image source={require('../assets/images/Pot1.png')} />
              <Image source={require('../assets/images/Pot2.png')} />
              <Image source={require('../assets/images/Pot3.png')} />
            </View>
          </View>
          <View style={styles.description}>
            <Text style={{ color: 'black', fontWeight: '800', fontSize: 11 }}>DESCRIPTION</Text>
            <Text style={{ fontSize: 12, fontWeight: '500', color: '#A9A9A9', marginTop: 6 }}>The species of the genus Astrophytum usually grow individually with spherical to columnar green shoots and reach heights of up to 1.5 meters...
              <TouchableOpacity>
                <Text style={{
                  color: 'black',
                  fontWeight: '500',
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                  // textDecorationLine: 'underline'
                }}>detail</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.cart}>
              <Image style={{ marginRight: 16 }} source={require('../assets/icons/Cart.png')} />
              <Text style={{ color: 'white', fontWeight: '800', fontSize: 11 }}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#F1F4FB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plant: {
    marginTop: 37,
    marginHorizontal: 50,
    height: 263,
    width: 174,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    height: 500,
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: 8,
    paddingTop: 46,
  },
  selectPot: {
    fontWeight: '800',
    fontSize: 11,
    color: 'black',
    marginLeft: 30,
    marginTop: 35,
  },
  pot: {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 30,
    marginRight: 90,
    justifyContent: 'space-between',
  },
  description: {
    marginTop: 24,
    marginHorizontal: 30,

  },
  cart: {
    backgroundColor: "black",
    flexDirection: 'row',
    height: 55,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 24,

  },
  selectButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: 250,
    marginLeft: 30,
    marginTop: 15,
    padding: 0.1,
    borderRadius: 3,
    borderWidth: 0.2,
    borderColor: 'gray'
  }


})