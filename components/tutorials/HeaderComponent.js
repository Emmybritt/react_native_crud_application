import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HeaderComponent({title}) {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listHeader: {
        backgroundColor: "darkslateblue",
        padding:9,
        textAlign:"center" ,
        marginTop: 6
    },
    text:{ 
        color:"white", 
        fontSize: 20,
        // fontWeight: 800,
    }
})