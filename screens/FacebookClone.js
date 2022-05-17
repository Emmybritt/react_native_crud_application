import { View, Text, ActivityIndicator, StyleSheet, Button, Modal, ImageBackground } from 'react-native'
import React, {useState} from 'react'

const FacebookClone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const setLoading = () => {
    setIsLoading(!isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const ShowModal = () => {
    setModalVisible(!modalVisible);
  }



  return (
    <View style={{ flex: 1 }} >
      <ImageBackground source={require("../assets/photograph_img3.jpg")}>
        <ActivityIndicator 
      animating={isLoading}
      color="red" 
      size="large" />
      <Header design={styles.first} title="Text and Photo" />
      <Header design={styles.second} title="Facebook" />
      <Button style={{ 
        justifySelf: "flex-end"
       }} title={isLoading ? "Remove loading spinner" : "click to enable loading"} onPress={setLoading} />
       <Button color="orange" title={modalVisible ? "Close modal" : "Show modal"} onPress={ShowModal} />
       <Modal
       animationType='side' 
       transparent="true"
       visible={modalVisible} 
       onRequestClose={() => {alert("modal closed"); setModalVisible(!modalVisible)}} >
         <View style={styles.modalStyle}>
           <View style={{
             flexDirection: "row",
             justifyContent: "space-between",
             alignItems: "center"
           }}>
             <Text style={styles.text}>Accept terms and condition</Text>
             <Text onPress={() => setModalVisible(!modalVisible)} style={styles.text}>&times;</Text>
           </View>
         </View>
       </Modal>
      </ImageBackground>
      
    </View>
  )
}

export default FacebookClone

const styles = StyleSheet.create({
  first: {
    backgroundColor: "darkblue",
    padding: 7,
    // borderRadius: 20,
  },
  second: {
    backgroundColor: "green",
    padding: 7,
    // borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 18,

  },
  modalStyle: {
    position: "absolute",
    height: "20%",
    borderColor:"green",
    // justifyContent
    borderWidth: 2,
    backgroundColor: "gray",
    top: 0,
    // blurRadius: 20,
    padding: 10,
    width: "100%"
  }
})



const Header = (props) => {
  return (
    <View style={props.design}>
      <Text style={{ color: "white", fontSize:"12" }}>{props.title}</Text>
    </View>
  )
}
