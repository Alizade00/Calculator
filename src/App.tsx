import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

function New() {
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
        <Image style={{ marginLeft: 30, marginTop: 68 }} source={require('./assets/icons/Back.png')} />
        <View>
          <Image style={styles.plant} source={require('./assets/images/plant.png')} />
        </View>
        <Image style={{ marginRight: 20, marginTop: 52 }} source={require('./assets/icons/Like.png')} />
      </View>
      <View style={styles.text}>
        <Text style={{ marginLeft: 30, fontSize: 24, fontWeight: '800', color: 'black' }}>Astrophytum</Text>
        <Text style={{ marginRight: 30, fontSize: 20, fontWeight: '800', color: 'black' }}>$312.00</Text>
        <View>
          <Image style={{ marginTop: 10 }} source={require('./assets/icons/Selection.png')} />
        </View>
      </View>
      <View style={styles.pot}>
        <Text>SELECT POT</Text>
      </View>


    </SafeAreaView>
  )
}
export default New

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
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: 8,
    paddingTop: 46,
  },
  pot: {
    backgroundColor:'white',
    fontWeight:'800'
  }
})