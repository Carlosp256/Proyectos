import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function Screen1() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const getDefinition = async () => {
    try {
      const response = await axios.get(
        `https://es.wikipedia.org/api/rest_v1/page/summary/${word}`
      );
      if (response.data.extract) {
        setDefinition(response.data.extract);
      } else {
        setDefinition('No se encontró información sobre la palabra');
      }
    } catch (error) {
      console.error(error);
      setDefinition('No se encontró información sobre la palabra');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setWord}
        value={word}
        placeholder="Ingrese una palabra"
      />
      <Button title="Buscar" onPress={getDefinition} />
      {definition ? (
        <Text style={styles.definition}>{definition}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  definition: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
