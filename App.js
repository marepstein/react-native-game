import React from 'react'
import { StyleSheet, View } from 'react-native'

import Header from './components/Header'
import StartScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <View style={styles.screenView}>
      <Header title="Guess a Number" />
      <StartScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1
  }
})
