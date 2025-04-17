import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from '../Screen/GetStarted';
import Main from '../Screen/MainScreen';
import TaskCard from '../Screen/screencomponents/TaskCard';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="TaskCard" component={TaskCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
