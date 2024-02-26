import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import AppNavigation from './src/navigation-stack';

const App = () => {
  return (
  <SafeAreaProvider>
    <StatusBar translucent backgroundColor={'transparent'} />
    <AppNavigation/>
  </SafeAreaProvider>
  )
}

export default App;