import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ListsItems2({item, deleteItem}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.ListItemsView}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.icon} onPress={() => deleteItem(item.id)}>&times;</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: "#eee"
    },
    ListItemsView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
    },
    icon: {
        color:"red",
        fontSize: 20,
        // fontWeight: 900,
        // cursor: "pointer"
    }

})