import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput ,
    TouchableOpacity,
} 
    from 'react-native'

import React, {useState} from 'react'

const TextInputComponent = ({AddMessage, errorMsg, removeErrorMsg}) => {
    const [text, setText] = useState();

    const changeText = (textValue) => {
        setText(textValue);
        // console.log(textValue)
    }

    

  return (
      <View>
          <View style={styles.content}>
      <TextInput 
      onChangeText={changeText} 
      style={styles.input}
      editable={true}
      multiline={false}
    //   allowFontScaling={true}
    caretHidden={true}
    // autoCapitalize="words"
    textContentType="emailAddress"
    autoFocus={true}
    blurOnSubmit={true}
      placeholder="Enter you items here" />
        
      <TouchableOpacity onPress={() => AddMessage(text)} style={styles.button}>
          <Text style={styles.text}>Add item</Text>
      </TouchableOpacity>
    </View>
        <View style={{ 
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: errorMsg ? 8 : 0,
            backgroundColor: errorMsg ? "red" : "",
         }}>
            <Text style={styles.text}>{errorMsg ? errorMsg : ''}</Text>
            <Text onPress={removeErrorMsg} style={styles.icon}>&times;</Text>
        </View>
      </View>
    
  )
}

export default TextInputComponent

const styles = StyleSheet.create({
    content:{
        flexDirection: "row",
        marginTop: 8,
        padding: 8,
    },
    text: {
        color: "white"
    },
    input: {
        width:"100%",
        color: "black",
        padding:12,
        // outlineColor: "darkslateblue",
        // outlineWidth:"3",
        // outlineRadius: 7,
        borderRadius: 7,
        borderWidth: 1,
        borderColor:"darkslateblue",
        // outlineOffset: 2,
    },
    button: {
        backgroundColor: "blue",
        padding:12,
        marginLeft: 3,
        borderRadius: 7,
    },
    text: {
        color: "white"
    },
    icon: {
        color: "#fff",
        // fontWeight: 700
    }
})