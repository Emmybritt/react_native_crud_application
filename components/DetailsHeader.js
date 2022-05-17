import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DetailsHeader() {
  return (
    <View style={styles.detailsHead}>
      <View>
          <Text style={{ color: 'black', fontSize:14, }}>+1 323-709-9800</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    detailsHead: {
        padding:10
    }
});