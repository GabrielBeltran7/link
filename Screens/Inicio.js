import React, {useEffect} from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator()
// import Registro from "./Screens/Registro"

const uri= "https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg"
const profilePicture = "https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg"


// function MyStack(){
// return(
// <Stack.Navigator>
//   <Stack.Screen name="Registro" component={Registro}/>
// </Stack.Navigator>
// )
// }


export default function App() {
  return (
    
        <View style={styles.container}>
      <Image source ={{uri}} style={[styles.image, StyleSheet.absoluteFill]} />
       

<ScrollView contentContainerStyle={{
flex: 1,
width: "100%",
height:"100%",
alignItems: 'center',
justifyContent: 'center',
}}>

<BlurView intensity={100}>

  <View style={styles.login}>
  <Image source ={{uri: profilePicture}} style={styles.profilePicture} />


  <View>
  <Text style={{fontSize: 20, fontWeight: '900', color: 'white'}}>E-mail</Text>
  <TextInput style={styles.input} placeholder="Link@gmail.com" />
  </View>                                
  <View>
  <Text style={{fontSize: 20, fontWeight: '900', color: 'white'}}>Password</Text>
  <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true} />
  </View>  
  <TouchableOpacity style = {[styles.button,{ backgroundColor: '#00CFEB99',}]}>
    <Text style={{fontSize: 20, fontWeight: "900", color: "white"}}>Login</Text>
  </TouchableOpacity>   
  <TouchableOpacity style = {[styles.button,{ backgroundColor: '#00CFEB',}]}>
    <Text style={{fontSize: 20, fontWeight: "900", color: "white"}}>Registrate</Text>
  </TouchableOpacity>          


  </View>

</BlurView>


</ScrollView>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:"100%",
    height:"100%",
    resizeMode:"cover",

  },
  login:{
    
    width: 350,
    height:600,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding:10,
    alignItems: 'center',
    

  },
  profilePicture:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30,
    alignItems: 'center',


  },
  input: {
    width: 250,
    height: 50,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    fontSize: 18
  },

  button: {
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 2,
  }

});