import { View, Text, Pressable, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"

export default function Header(){
  return (
    <View style={styles.container}>
      <View style={styles.usernameContainer}>
        <AntDesign name="user" color="#000" size={40} />
        <Text>Admin</Text>
      </View>
      <View style={styles.linksContainer}>
        {/*TODO: Create the routes*/}
        <Pressable onPress={()=>navigation.navigate('login')}><Text style={styles.linkText}>Inicio</Text></Pressable>
        <Pressable onPress={()=>navigation.navigate('login')}><Text style={styles.linkText}>Usuarios</Text></Pressable>
        <Pressable onPress={()=>navigation.navigate('login')}><Text style={styles.linkText}>Prestamos</Text></Pressable>
        <Pressable onPress={()=>navigation.navigate('login')}><Text style={styles.linkText}>Agregar</Text></Pressable>
        <Pressable onPress={()=>navigation.navigate('login')}><Text style={styles.linkText}>Cerrar session</Text></Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  usernameContainer: {
    flexBasis: 200,
    flexDirection: 'row',
    alignItems: 'center'
  },
  linksContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linkText: {
    color: '#555'
  }
})
