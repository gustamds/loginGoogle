import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';
import Routes from './src/screens/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}