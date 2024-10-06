import { View, Pressable, Text, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

//data: {bookName:string, category: int, currentAmount: int, maxAmount: int}
export default function ListItem({data}){
  return(
    <View style={[styles.container]}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{data.bookName}</Text>
        <Text style={styles.details}>Categoria: {data.category} | cantidad({data.currentAmount}/{data.maxAmount})</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.pressable}><FontAwesome name="handshake-o" size={20} /></Pressable>
        <Pressable style={styles.pressable}><FontAwesome6 name="edit" size={20} /></Pressable>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  headerContainer: {
    width: 500,
  },
  title: {
    fontWeight: '700'
  },
  details: {
    color: "#555",
  },
  pressable: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 3
  },
  buttonsContainer: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
