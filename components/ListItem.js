import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { render } from 'react-dom';

const lists = [
    {
        id: 1,
        sender: 'Emmanuel',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 2,
        sender: 'Ojumola ade',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 3,
        sender: 'Sarumi',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 4,
        sender: 'Daniel',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 5,
        sender: 'Chuwkuudi',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 6,
        sender: 'Olayinka',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Adebayo',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Adebayo',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Shubomi',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Shukura',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Sheye',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Adebayo',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Kanni',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Kunmi',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Ojumola',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Kemi',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Sadins',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Jennifer',
        message: 'You have subscibed',
        image: 'image'
    },
    {
        id: 7,
        sender: 'Samuel davids',
        message: 'You have subscibed',
        image: 'image'
    },
];

export default function ListItem() {
  return (
    <View style={styles.items}>
        <ScrollView>
            { lists.map((item, index) => (
          <View key={index} style={styles.content}>
              <View>
                  {/* <Image source={item.image} /> */}
                  <View style={{ 
                      padding:12,
                      border: 2,
                      borderRadius:30
                   }}></View>
              </View>
              <View>
                <Text style={{
                    fontWeight: 600,
                    fontSize: 17
                }}>{item.sender}</Text>
                <Text>{item.message}</Text>
              </View>
          </View>
      )) }
        </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderColor: '#eee',
        borderWidth: 2,
    },
    items: {
        marginTop:15,
        backgroundColor:'white',
        padding:9
    }
})