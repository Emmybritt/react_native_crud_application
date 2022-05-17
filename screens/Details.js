import { View, StyleSheet, Text, FlatList } from 'react-native'
import React, {useState} from 'react'
import Header from '../components/Header'
import ListsItems2 from '../components/ListsItems2';
import AddItem from '../components/AddItem';

export default function Details() {
const [items, setItems] = useState([
  { id: 1, text: "milk" },
  { id: 2, text: "egg" },
  { id: 3, text: "bread" },
  { id: 4, text: "juice" },
  { id: 5, text: "fish" }
]);

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id);
  });
}


// const AddItem = () => {
//   console.log('i am clicked');
// }

// const AddItem = (text) => {
//   setItems(prevItems => {
//     return [{id: 5, text: text}, ...prevItems];
//   });
// }

  return (
    <View style={styles.containers}>
      <Header />
      <AddItem />
      <FlatList data={items} renderItem={({item}) => <ListsItems2 deleteItem={deleteItem} item={item} />} />
    </View>
  )
}


const styles = StyleSheet.create({
  containers: {
    paddingTop: 10
  }
})