import { View, Text, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons";

export default function HomeHeader(){
      <View>
        <View>
          <AntDesign name="user" color="#000" size={40} />
          <Text>Admin</Text>
        </View>
        <View>
          <Pressable onPress={()=>navigation.navigate('login')}><Text>Usuarios</Text></Pressable>
          <Pressable onPress={()=>navigation.navigate('login')}><Text>Prestamos</Text></Pressable>
          <Pressable onPress={()=>navigation.navigate('login')}><Text>Agregar</Text></Pressable>
        </View>
      </View>
}

