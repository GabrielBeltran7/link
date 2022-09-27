import React, {useEffect} from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
//import { BlurView } from 'expo-blur';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator()
import Registro from "./Screens/Registro"
import Inicio from "./Screens/Inicio"






function MyStack(){
return(
<Stack.Navigator>
<Stack.Screen  name="Registro" component={Registro}/>
<Stack.Screen name="Login" component={Inicio}/>


</Stack.Navigator>
)
}


export default function App() {
  return (
    
        <NavigationContainer>
          <MyStack/>
        </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});
