import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

import Colours from '../constants/Colours'

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />

  // {...props} - is basically FORWARDING your props to the component you're using in your custom component
  // Now, when i set other props outside this component (in start screen), then they will be added to the Text Input
  // This allows us to add ALL the props that you can add on the TextInput onto your customized component
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colours.lightGrey,
    borderBottomWidth: 2,
    marginVertical: 10
  }
})

export default Input
