import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

export default function AddItem({}) {
    const [text,setText] = useState();

    const onChange = (textValue) => setText(text);
  return (
    <View>
      <TextInput onChangeText={onChange} placeholder="Add item..." style={styles.input} />
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btnText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: "center"
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding:9,
        margin: 5,
    }
})