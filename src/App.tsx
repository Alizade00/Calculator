import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://api.tvmaze.com/search/shows?q=Batman',
    );
    const responseJson = await response.json();
    setMovies(responseJson);
  };
console.log(movies)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.contentList}>
        {movies?.map((item, index) => (
          <View key={index}>
            <Text>{item.show.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
  contentList: {
    flexGrow: 1,
  },
});