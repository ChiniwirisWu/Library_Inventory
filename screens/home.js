import { View, Text, Pressable, StyleSheet } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ItemsList from "../components/ItemsList";

export default function Home({navigation}){
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Header />
        <SearchBar />
        <ItemsList />
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    width: 600,
    height: 500,
  },
})
