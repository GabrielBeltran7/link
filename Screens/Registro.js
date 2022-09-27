import React, {useState} from 'react';
import { Image,collection, onSnapshot, query, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import {db} from '../database/firebase';
import { BlurView } from 'expo-blur';


const uri= "https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg"


const initalState= {
  nombres: "",
  apellidos: ""
}

export default function App() {
 
   
  const [data, setData] = useState(initalState);

  const  handlechangeText = (name, value) => 
  {
    setData ({...data, [name]: value})
  };

  const saveNewUser = async () => {
    if (data.name === "") {
      alert("por favor ingrese los datos");
    } else {

      try {
        await db.collection("users").add({
            nombres: data.nombres,
            apellidos: data.apellidos
          
        });

      } catch (error) {
        console.warn(error)
      }
    }
  };

  return (
   
    <View style={styles.container1}>
      
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
  <View>
  <TextInput style={styles.input}  placeholder="Nombres" onChangeText={(value) => handlechangeText( "nombres", value)} value={data.nombres} />
  </View>                                
  <View>
  <TextInput style={styles.input}  placeholder="Apellidos" onChangeText={(value) => handlechangeText( "apellidos", value)} value={data.apellidos} />
  </View> 
  

<View>
  <Button title='Guardar' onPress ={() => saveNewUser()} />
</View> 
</View>

</BlurView>
</ScrollView>
  </View>
  );
}



const styles = StyleSheet.create({
  container1: {
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
    
    flex: 1,
    width: 400,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding:20,
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
    width: 320,
    height: 45,
    borderColor: '#00c5e4',
    borderWidth: 1,
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
    
    marginVertical: 3,
    borderColor: '#fff',
    borderWidth: 2,
    
  },
  

});
