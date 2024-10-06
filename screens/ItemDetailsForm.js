import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import Header from "../components/Header";

export default function NewItemForm(){
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Header />
        <Formik initialValues={{name: '', category: '', code: '',  maxAmount: 0}}>
          {(props)=>(
            <View style={styles.formContainer}>
              <Text style={styles.h4}>Llene los campos para agregar un nuevo registro.</Text>
              <View>
                <Text style={styles.h4}>Nombre: </Text>
                <TextInput style={styles.textInput} onChangeText={props.handleChange('name')} />
              </View>
              <View>
                <Text style={styles.h4}>Categoria: </Text>
                <TextInput style={styles.textInput} keyboardType="numeric" onChangeText={props.handleChange('category')} />
              </View>
              <View>
                <Text style={styles.h4}>Codigo: </Text>
                <TextInput style={styles.textInput} onChangeText={props.handleChange('code')} />
              </View>
              <View>
                <Text style={styles.h4}>Cantidad: </Text>
                <TextInput style={styles.textInput} onChangeText={props.handleChange('maxAmount')} />
              </View>
              <View style={styles.buttonsContainer}>
                <Button style={styles.h4} fontSize={10} title="Actualizar" onPress={props.handleSubmit} />
                <Button style={[styles.h4]} color="red" fontSize={10} title="Borrar" />
              </View>
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
  buttonsContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
