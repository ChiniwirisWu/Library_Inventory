import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Login from './screens/login';
import Home from './screens/home';
import NewItemForm from './screens/NewItemForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='newItemForm'>
        <Stack.Screen
          name='login'
          component={Login}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='home'
          component={Home}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='newItemForm'
          component={NewItemForm}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
