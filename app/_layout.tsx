import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function ComponentScreen() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='index'/>
      <Stack.Screen name='register'/>
      <Stack.Screen name='tabs' />
    </Stack>
  );
}
