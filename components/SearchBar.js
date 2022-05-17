import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'


export default function SearchBar() {
    const [text, setText] = useState('This is a text');

    const MyArrays = [
        {
            name: 'Emmanuel',
            message: 'Your account have been credited successfully',
            image: 'image'
        },
        {
            name: 'daniel',
            message: 'Someone flashed you yesterday',
            image: 'image'
        },
        {
            name: 'Ebosa',
            message: 'Youy have been credited successfully',
            image: 'image'
        }
    ];
  return (
      <View>
          {/* <TextComponent text={text} /> */}
          <View style={{ 
          backgroundColor: "white",
          flexDirection: "row",
          alignItems:"center",
          padding:15,
          position: 'sticky',
          top: 2,
          zIndex:600
       }}>
          <View style={{ 
            paddingTop: 3,
            paddingBottom: 3,
            borderRadius:6,
            paddingRight: 8,
            backgroundColor: "#eee",
            marginLeft: 6,
            marginRight: 6,
        }}>
      <TextInput
      onChangeText={ snsknknsk => setText(snsknknsk)}
        defaultValue={text}
       style={
          {
            paddingVertical: 12,
            paddingHorizontal: 12,
            border: 'none',
            outline: 'none',
            fontSize: 17
        }
      } placeholder="Search for names here" />
      
    </View>
    <TouchableOpacity 
    onPress={() => Alert.alert('it is working')}
    style={{
        backgroundColor: "blue",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius:6,
    }}>
          <Text style={{ color: "white", }}>Save</Text>
      </TouchableOpacity>
      </View>
      </View>   
  )
}

const TextComponent = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}



