import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
        <Image source={require('./assets/icons/Menu.png')} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ marginRight: 46 }} source={require('./assets/icons/Basket.png')} />
          <Image source={require('./assets/icons/Search.png')} />
        </View>
      </View>
      <View style={styles.menu}>
        <Text style={styles.menuText}>Concept</Text>
        <Text style={{ ...styles.menuText, color: '#D2D2D2' }}>Popular</Text>
        <Text style={{ ...styles.menuText, color: '#D2D2D2' }}>New</Text>
      </View>
      <View style={styles.rectangle}>
        <Image source={require('./assets/icons/Rectangle.png')} />
      </View>
      <View style={styles.filter}>
        <Image source={require('./assets/icons/Filter.png')} />
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.plant}>
          <Text style={styles.plantText}>Gasteria Kyoryu</Text>
          <Text style={{ paddingLeft: 33, fontSize: 9 }}>w 300 × h 310 mm</Text>
          <Image source={require('./assets/images/Plant1.png')} />
          <View style={styles.footer}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '800', marginLeft: 20, marginTop:-24}}>$228.00</Text>
            <View style={styles.button}>
              <Text style={{color:'white', fontSize:30}}>+</Text>
            </View>
          </View>
        </View>
        <View>
        <Image style={styles.plant2} source={require('./assets/images/Plant2.png')}/>
        </View>
      </ScrollView>
      <View style={styles.slider}>
        <Image source={require('./assets/icons/Slider.png')}/>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 29,
    marginTop: 29,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 83,
    marginLeft: 26,
    marginRight: 65,
  },
  menuText: {
    fontSize: 17,
    fontWeight: '800',
    color: 'black'
  },
  rectangle: {
    marginLeft: 28,
    marginTop: 5,
  },
  filter: {
    marginTop: 47,
    alignItems: 'flex-end',
    marginHorizontal: 27,
  },
  plant: {
    backgroundColor: '#F1F4FB',
    borderRadius: 24,
    paddingTop: 12,
    height: 470, 
  },
  plantText: {
    fontSize: 21,
    color: 'black',
    paddingLeft: 31,
    paddingTop: 35,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
      backgroundColor: '#1DA154',
      width: 70,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomRightRadius: 24,
      borderTopLeftRadius: 12,
      marginTop:-50,
  },
  slider: {
    marginBottom:15, 
    marginLeft: 12
  },
  plant2: {
    backgroundColor: '#F1F4FB',
    borderRadius: 24,
    marginLeft:40,
    marginTop:88,

  }

})