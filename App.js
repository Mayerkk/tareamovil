import React, { useState } from "react";
import { NativeBaseProvider, Container } from "native-base";
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';

import CustomInput from "./CustomInput";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginSS from './Components/Login';

const newStyles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  innerText: {
    color: 'blue', // Cambiado el color a azul
  },
  container2: {
    margin: 5, // Cambiado de "gap" a "margin"
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    marginVertical: 5, // Cambiado de "5" a 5 (número en lugar de cadena)
    padding: 10, // Cambiado de "10" a 10
  }
});

const newStyles2 = StyleSheet.create({
  Image: {
    borderRadius: 50, // Cambiado el valor de 100 a 50
  },
  container2: {
    flex: 1,
    margin: 5, // Cambiado de "gap" a "margin"
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  titleText: {
    fontSize: 24, // Cambiado el tamaño de fuente a 24
    fontWeight: 'normal', // Cambiado el peso de fuente a normal
  },
  invalidInput: {
    borderColor: 'red',
  },
});

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState(""); // Cambiado "name" a "username"
  const [password, setPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const [isUsernameValid, setIsUsernameValid] = useState(false); // Cambiado "isNameValid" a "isUsernameValid"
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validateFields = () => {
    const usernameRegex = /^[A-Za-z\s]+$/;
    const validUsername = usernameRegex.test(username);
    const validPassword = password.length >= 8;

    setIsUsernameValid(validUsername);
    setIsPasswordValid(validPassword);

    setIsButtonEnabled(validUsername && validPassword);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: 'https://www.mexidiom.com/wp-content/uploads/2021/06/palomita-I.jpg' }}
        style={{ width: 200, height: 200 }} />
      <Text style={newStyles2.titleText}>
        My App
      </Text>
      <TextInput
        style={[
          newStyles2.input,
          !isUsernameValid && newStyles2.invalidInput,
        ]}
        placeholder="Username"
        keyboardType="text"
        onChangeText={(text) => {
          setUsername(text);
          validateFields();
        }}
      />
      <TextInput
        style={[
          newStyles2.input,
          !isPasswordValid && newStyles2.invalidInput,
        ]}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
          validateFields();
        }}
      />
      <Button
        title="Login"
        onPress={() => alert("Logged in")}
        disabled={!isButtonEnabled}
      />

      <View style={newStyles2.container2}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <Button
          title="Change Password"
          onPress={() => navigation.navigate('Change')}
        />
        <Button
          title="Forgot Password"
          onPress={() => navigation.navigate('Forgot')}
        />
      </View>
    </View>
  );
}

// Resto del código sin cambios...

