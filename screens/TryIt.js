import { View, Text, SafeAreaView, Switch, FlatList, StatusBar,TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import HeaderComponent from '../components/tutorials/HeaderComponent'
import TextInputComponent from '../components/tutorials/TextInputComponent'
import ListOfItem from '../components/tutorials/ListOfItem'

const TryIt = () => {
    const [messages, setMessages] = useState([
        {id: 1, name: "Emmy britt", message: "Your account have been credited"},
        {id: 2, name: "Daniel bryan", message: "You are beautifull baby"},
        {id: 3, name: "Samuel", message: "thanks for the money"},
        {id: 4, name: "Funke", message: "hope you are cool"},
        {id: 5, name: "Excelence", message: "create a new account now"},
        {id: 6, name: "Ifechuwkudi", message: "Check for the food"},
        {id: 7, name: "Kemiola", message: "Bro you need to make money"},
    ]);
    const [isEnabled, setIsEnabled] = useState(true);

    const [errorMsg, setErrorMsg] = useState();

    const deleteMessage = (id) => {
        setMessages(recentMessages => {
            return recentMessages.filter((item) => item.id != id)
        })
    }

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    }

    const AddMessage = (message) => {
        if (!message) {
            setErrorMsg('All field must be filled');
            console.log('There is no message'); 
            }else{
                setErrorMsg('');
                setMessages(recentMessages => {
                return [{id: Math.random(), name: "Emmy britt", message: message }, ...recentMessages]
            })
        }
        
    }

    const removeErrorMsg = () => {
        setErrorMsg('');
    }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style={styles.statusbarDes} />
        <View>
            <View style={{ 
                position: "sticky",
                top: 0,
             }}>
                <HeaderComponent title="List Item Component" />
                <TextInputComponent AddMessage={AddMessage} removeErrorMsg={removeErrorMsg} errorMsg={errorMsg} />
            </View>
            
            <View style={styles.listData}>
                <FlatList data={messages} renderItem={({item, index}) => <ListOfItem deleteMessage={deleteMessage} item={item} keyExtractor={index} />} />
            </View>
        </View>
        <Switch 
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        value={isEnabled}
        disabled={false}
        onValueChange={toggleSwitch}
        trackColor={{ false: "#767577", true: "#81b0ff" }} />
        {/* <TextInput /> */}
    </SafeAreaView>
  )
}

export default TryIt

const styles = StyleSheet.create({
    statusbarDes: {
        backgroundColor:"black",
        height: 14,
    },
    container: {
        flex: 1,
        backgroundColor: "#eee",
        padding: 10,
    },
    listData: {
        backgroundColor: "#fff",
        padding: 7,
        marginTop:5,
    }
})