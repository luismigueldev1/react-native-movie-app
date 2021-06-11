import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigators/RootStackNavigator';
import {GradientProvider} from './src/context/GradientContext';

export default function App() {
  return (
    <NavigationContainer>
      <GradientProvider>
        <RootStackNavigator />
      </GradientProvider>
    </NavigationContainer>
  );
}
