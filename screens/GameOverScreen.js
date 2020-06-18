import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

import Colors from '../constants/Colours'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.resetGame} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Colors.primary,
    fontSize: 40,
    padding: 20
  }
})

export default GameOverScreen
