import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )

  // props.children is used to display whatever you include between the opening and closing tags when invoking a component.
  // when this component is invoked {props.children} will also be displayed and this is just a reference to what is between the opening and closing tags of the component.
  // e.g. <Card>Hello</Card> (hello is passed as props.children)

  // using the spread operator and props.style allows for overwriting and customization from outside of this component (the style props passed to the card component)
  // this merges the two styles
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#bdc3f9',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // these shadow properties only work on IOS
    backgroundColor: 'white',
    elevation: 5,
    // for android
    padding: 10,
    borderRadius: 5
  }
})

export default Card
