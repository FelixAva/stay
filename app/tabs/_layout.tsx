import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { TabBarIcon } from '@/components';

export default function AppTabs() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: 'gray'
    }}>
      <Tabs.Screen
        name='(dashboard)'
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <TabBarIcon name='home-outline' color={color} />
        }}
        />
      <Tabs.Screen
        name='(form)'
        options={{
          title: 'Quizzes',
          tabBarIcon: ({ color }) => <TabBarIcon name='shapes' color={color} />
        }}
      />
      <Tabs.Screen
        name='(profile)'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name='person-outline' color={ color } />
        }}
      />
    </Tabs>
  );
}
