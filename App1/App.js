import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const App = () => {
  const handlePress = () => {
    Linking.openURL('https://open.spotify.com/playlist/0nqumhURrLHkUDC0TjLP5p?si=1fe3058a6dc64b3c');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.button}>
        <Text style={styles.buttonText}>babe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1DB954',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 50,
    color: 'white',
  },
});

export default App;

