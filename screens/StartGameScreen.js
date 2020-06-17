import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

import Card from '../components/Card.js'
import Colours from '../constants/Colours'
import Input from '../components/Input'

const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  // gives users the choice to make sure their inputted number is what they wanted to submit
  const [inputNumber, setInputNumber] = useState()

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    // .replace() is a normal JS method that exists on strings and inputText will be a string
    // this regexp basically means that im replacing anything thats not a number 0-9, globally (in the entire text), with an empty string
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNum = parseInt(enteredValue)
    if (chosenNum === isNaN || chosenNum <= 0 || chosenNum > 99) {
      return
    }
    setConfirmed(true)
    setInputNumber(chosenNum)
    setEnteredValue('')
  }

  let confirmedOutput
  if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {inputNumber} </Text>
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
      // this basically allows you to get rid of the keyboard on screen tap
      // Keyboard is a react-native API as opposed to component
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="RESET"
                onPress={resetInputHandler}
                color={Colours.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="CONFIRM"
                onPress={confirmInputHandler}
                color={Colours.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    // applies if 300px is larger than the device width: if so - the container will be 80% of the width
    alignItems: 'center'
    // remember DEFAULT is column (justifyContent is vertical axis and alignItems is cross axis)
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  input: {
    width: '40%',
    textAlign: 'center'
  }
})

export default StartScreen
