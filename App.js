import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Login from './components/Login';
import SignUp from './components/SignUp';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Login" 
      component={Login} 
      options={{ 
        headerShown:  false}}/>
      <Stack.Screen 
      name="SignUp" 
      component={SignUp} 
      options={{ 
        headerShown:  false}}/>
    </Stack.Navigator>
  </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E9C83',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
