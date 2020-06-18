import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Header from './components/Header'
import StartScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guesses, setGuesses] = useState(0)

  const newGameHandler = () => {
    setGuesses(0)
    setUserNumber(null)
  }

  const startGameHandler = (inputNumber) => {
    setUserNumber(inputNumber)
    setGuesses(0)
  }

  const endGameHandler = (numberOfRounds) => {
    setGuesses(numberOfRounds)
  }

  let content = <StartScreen onStartGame={startGameHandler} />

  if (userNumber && guesses <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={endGameHandler} />
  } else if (guesses > 0) {
    content = (
      <GameOverScreen
        resetGame={newGameHandler}
        roundsNumber={guesses}
        userNumber={userNumber}
      />
    )
  }

  return (
    <View style={styles.screenView}>
      <Header title="Guess a Number" />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1
  }
})
