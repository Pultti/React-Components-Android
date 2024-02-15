import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const URL = 'https://newsapi.org/v2/top-headlines'; // Simplified URL
const APIKEY = 'Your api key'; // Your actual API key from https://newsapi.org

export default function News() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const address = `${URL}?country=us&category=business&apiKey=${APIKEY}`;
    
    fetch(address)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.articles);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } else if (!isLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <ScrollView style={styles.container}>
        {items.map((item, index) => (
          <View key={index} style={styles.news}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.thumbnail}
                source={{ uri: item.urlToImage }}
              />
            </View>
            {/* Display other news item details */}
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  news: {
    padding: 20,
    alignItems: 'stretch',
    borderTopWidth: 2,
    borderTopColor: '#333',
  },
  imageWrapper: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    margin: 0,
    padding: 0,
  },
  thumbnail: {
    width: 250,
    height: 250,
  },
});