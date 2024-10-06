import { View, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function SearchBar(){
  return (
    <View style={styles.container}>
      <TextInput placeholder='Nombre o codigo de libro' placeholderTextColor="#ccc" style={styles.textInput} />
      <AntDesign name="search1" color="#000" size={15} style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 3, 
    paddingLeft: 30,
  },
  icon: {
    position: 'absolute',
    left: 5 
  }
})
