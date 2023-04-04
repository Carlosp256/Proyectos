import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import translate from 'translate';

export default function Tab2() { // Renombrar a Tab2
  const [inputText, setInputText] = React.useState('');
  const [translation, setTranslation] = React.useState('');

  const handleTranslation = async () => {
    const translatedText = await translate(inputText, { from: 'en', to: 'es' });
    setTranslation(translatedText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translation App</Text>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter an English word"
      />
      <Text style={styles.translation}>{translation}</Text>
      <TouchableOpacity style={styles.button} onPress={handleTranslation}>
        <Text style={styles.buttonText}>Translate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  translation: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
