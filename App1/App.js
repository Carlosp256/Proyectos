import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const App = () => {
  const handlePress = () => {
    Linking.openURL('https://wwww.google.com');
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
    fontSize: 5,
    color: 'white',
  },
});

export default App;

