import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import { SafeAreaView } from 'react-native-web'
import ListItem from '../components/ListItem'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header }>
        <StatusBar backgroundColor="#61dafb" animated={true} />
        <SearchBar />
        <ListItem />
    </View>
    </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ebeb",
        flex: 1 
    },
    header: {
        // marginTop:15
    }
})