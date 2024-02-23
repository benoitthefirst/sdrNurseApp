import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={style.container}>
      <Text>SDR NURSE APP</Text>
    </View>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})