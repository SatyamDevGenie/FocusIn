import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SetTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Task</Text>
      <TextInput style={styles.input} placeholder="Task Name" />
      <TextInput style={styles.input} placeholder="Task Description" />
      <Button title="Save Task" onPress={() => { /* Handle save task */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default SetTask;