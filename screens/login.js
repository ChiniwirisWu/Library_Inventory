import { View, TextInput, Text, StyleSheet, Button, Pressable } from "react-native"
import { Formik } from "formik"

export default function Login(){
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.h1}>Biblioteca Julian Temistocles</Text>
        <Formik
          initialValues={{username:'', password:''}}
          onSubmit={(values, actions)=>{
              //TODO: Check if user exists and send them to their page. 
          }}
        >
          {(props)=>(
            <View style={styles.formContainer}>
              <Text>Usuario: </Text>
              <TextInput style={styles.textInput} value={props.values.username} onChangeText={props.handleChange('username')} />
              <Text>Contraseña: </Text>
              <TextInput style={styles.textInput} value={props.values.password} onChangeText={props.handleChange('password')} />
              <Button title="log in" onPress={props.handleSubmit} />
              <Text style={styles.h4}>¿Olvidaste tu contraseña? <Pressable><Text style={styles.link}>Haz click aqui</Text></Pressable></Text>
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
    alignItems:'center',
    justifyContent:'center'
  }, 
  contentContainer: {
    width: 600,
    height: 500,
    alignItems: 'center'
  },
  h1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  h4: {
    fontSize: 10
  },
  formContainer: {
    marginTop: 50,
    width: 200,
    backgroundColor: '#fff',
    rowGap: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5, 
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: "#444",
  },
  link: {
    color: 'blue'
  }
})
