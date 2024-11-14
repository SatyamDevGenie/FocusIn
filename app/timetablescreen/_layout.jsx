import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const TimetableScreenLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tableList"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="setTask"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TimetableScreenLayout;