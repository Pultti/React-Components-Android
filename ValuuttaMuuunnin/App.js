import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [euro, setEuros] = useState('');
  const [pounds, setPounds] = useState(0);

  function calculate() {
    console.log(euro + "tämä määrä muutetaan punniksi");
    const result = euro * 0.86;
    setPounds(result);
    console.log(result + "eurot puntina");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Euros</Text>
      <TextInput
        style={{ height: 50, width: 75, paddingBottom: 10 }}
        keyboardType='decimal-pad'
        value={euro}
        onChangeText={text => setEuros(text)}
      />
      <Text style={styles.field}>Pounds</Text>
      <Text style={styles.field}>{pounds}</Text>
      <Button onPress={calculate} title="Calculate" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 10,
  },
});