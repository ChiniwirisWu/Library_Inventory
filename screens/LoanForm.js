import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import Header from "../components/Header";

export default function LoanForm(){
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Header />
        <Formik initialValues={{username: '', id: '', phone: ''}}>
          {(props)=>(
            <View style={styles.formContainer}>
              <Text style={styles.h4}>Datos del libro: </Text>
              <View>
                <Text style={styles.h4}>Nombre: </Text>
                <TextInput value="Harry Potter y la piedra filosofal" style={styles.textInput} editable={false} />
              </View>
              <View>
                <Text style={styles.h4}>Codigo: </Text>
                <TextInput value="DJ3943BADFK" style={styles.textInput} editable={false} />
              </View>
              <Text style={styles.h4}>Llene los siguientes campos para agregar un registro del prestamo:</Text>
              <View>
                <Text style={styles.h4}>Nombre: </Text>
                <TextInput value={props.values.username} style={styles.textInput} onChangeText={()=> props.handleChange('username')} />
              </View>
              <View>
                <Text style={styles.h4}>Cedula: </Text>
                <TextInput value={props.values.id} style={styles.textInput} onChangeText={()=> props.handleChange('id')} />
              </View>
              <View>
                <Text style={styles.h4}>Telefono: </Text>
                <TextInput value={props.values.phone} style={styles.textInput} onChangeText={()=> props.handleChange('phone')} />
              </View>
              <Button style={styles.h4} fontSize={10} title="Agregar" onPress={props.handleSubmit} />
              </View>
            )} 
        </Formik>
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
  formContainer: {
    width: 300,
    marginTop: 30,
    alignSelf: 'center',
    rowGap: 10
  },
  h1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  h4: {
    fontSize: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: "#444",
  },
})
