import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const ListOfItem = ({item, deleteMessage }) => {
  return (
    <TouchableOpacity>
        <ScrollView>
            <View style={styles.content}>
                <View style={{ 
                        flexDirection: "row",
                        alignItems: "center"
                     }}>
                    <View>
                        <Image style={styles.image} source={require("../../assets/photograph_img3.jpg")} />
                    </View>
                    <View style={{ 
                        marginLeft: 5,
                     }}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.message}>{item.message}</Text>
                    </View>
                    
                </View>
                <Text onPress={() => deleteMessage(item.id)} style={styles.icon}>&times;</Text>
            </View>
        </ScrollView>
    </TouchableOpacity>
  )
}

export default ListOfItem

const styles = StyleSheet.create({
    content: {
        padding: 9,
        backgroundColor: "#eee",
        borderColor: "#ddd",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon: {
        color: "red",
        fontSize: 17,
        fontWeight: "900",
    },
    name: {
        fontSize: 12,
        // fontWeight: 700,
        color: "blue"
    },
    message: {
        fontSize: 9,
        color: "black"
    },
    image: {
        resizeMode: "cover",
        height: 50,
        width: 50,
        borderRadius: 30,
        borderColor: "blue"
    }
})