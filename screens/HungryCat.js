import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

export default function HungryCat() {
  return (
    <ImageBackground source={require('../assets/photograph_img3.jpg')}>
      <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ 
        // flex: 1,
        flexDirection:"column",
        justifyContent: "space-between",
       }}>
         <View style={{ 
           backgroundColor: "black",
           height: 100,
           flexDirection: 'row',
           justifyContent: "space-between",
           paddingLeft: 20,
           paddingRight: 20,
           paddingTop: 20
          }}>
            <View style={{ backgroundColor: "tomato",padding:12, zIndex:400, height: 40, width: 40 }} />
            <View style={{ backgroundColor: "cyan",padding:12, zIndex:400, height: 40, width: 40 }} />
         </View>
         <View style={{ 
           backgroundColor: "black",
           height: 100,
          }}>
            
         </View>
      </View>
    </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  
})