import { FlatList, View, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";

export default function ItemsList(){
  const data = [
    {bookName: "El abogado del diablo", category: 100, currentAmount: 6, maxAmount: 6, readersId: []},
    {bookName: "EL sutil arte de que te importe un carajo", category: 500, currentAmount: 3, maxAmount: 6, readersId: [932,438, 455]},
    {bookName: "Breve historia sobre la economia", category: 300, currentAmount: 1, maxAmount: 2, readersId: [932]},
    {bookName: "El abogado del diablo", category: 100, currentAmount: 6, maxAmount: 6, readersId: []},
    {bookName: "EL sutil arte de que te importe un carajo", category: 500, currentAmount: 3, maxAmount: 6, readersId: [932,438, 455]},
    {bookName: "El abogado del diablo", category: 100, currentAmount: 6, maxAmount: 6, readersId: []},
    {bookName: "EL sutil arte de que te importe un carajo", category: 500, currentAmount: 3, maxAmount: 6, readersId: [932,438, 455]},
    {bookName: "Breve historia sobre la economia", category: 300, currentAmount: 1, maxAmount: 2, readersId: [932]},
    {bookName: "Breve historia sobre la economia", category: 300, currentAmount: 1, maxAmount: 2, readersId: [932]},
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index})=> <ListItem data={item} />}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 600,
    height: 300,
    marginTop: 10,
  },
  contentContainer: {
    rowGap: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  }
})
