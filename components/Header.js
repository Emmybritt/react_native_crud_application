import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

Header.defaultProps = {
    title: "This is a shopping list"
  };

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding:15,
        backgroundColor: "darkslateblue"
    },
    text: {
        fontSize: 23,
        color: "#fff",
        textAlign: "center"
    }
})