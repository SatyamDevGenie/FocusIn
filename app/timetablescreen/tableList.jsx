import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const TableList = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      
      <Pressable
        onPress={() => router.push('/timetablescreen/settask')}
        style={({ pressed }) => [
          styles.createButton,
          { opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <Text style={styles.buttonText}>Create Task</Text>
      </Pressable>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  createButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default TableList;