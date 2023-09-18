import React, { useState }from "react";
import { NativeBaseProvider, Container } from "native-base"; 
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const hojaDeEstilos = StyleSheet.create({
  image: {
    borderRadius: 100,
    width: 200,
    height: 200
  },
  contenedor: {
    flex: 1,
    gap: 5,
    justifyContent:'center',
    alignItems:'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  textoToDo: {
    fontSize: 40,
    fontWeight: 'bold',
  }
  ,input: {
    width: '80%',
    height: 30,
    margin: 3,
    padding: 5,
    borderColor: 'gray', 
    borderWidth: 2,     
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'lightgreen'
  },

  invalidInput: {
    backgroundColor: 'red',  
  },
  botones: {
    backgroundColor: 'red',
    padding: 20,    
  },
  
});

function InicioScreen({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [elBotonEstaDesactivado, setelBotonEstaDesactivado] = useState(true);

  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validateFields = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const validName = nameRegex.test(name);
    const validPassword = password.length >= 8;

    setIsNameValid(validName);
    setIsPasswordValid(validPassword);

    setelBotonEstaDesactivado(!(validName && validPassword) || name.trim() === '' || password.trim() === '');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue'}}>
        <Image source={{uri: 'https://i.pinimg.com/236x/2a/2e/7f/2a2e7f0f60b750dfb36c15c268d0118d.jpg'}}
              style={hojaDeEstilos.image} />
        <Text style={hojaDeEstilos.textoToDo}>
          To Do App
        </Text>
        <TextInput style={[hojaDeEstilos.input,!isNameValid && hojaDeEstilos.invalidInput, ]} placeholder="Name" keyboardType="text" onChangeText={(text) => {setName(text); validateFields();}}/>
        <TextInput style={[hojaDeEstilos.input,!isPasswordValid && hojaDeEstilos.invalidInput, ]} placeholder="Password" keyboardType="default" secureTextEntry={true} onChangeText={(text) => { setPassword(text); validateFields();}}/>
        <Button style={hojaDeEstilos.botones} title="Ingresar" disabled={!elBotonEstaDesactivado} />

        <View style={hojaDeEstilos.contenedor}>
          <Button style={hojaDeEstilos.botones} title="Registrarse"onPress={() => navigation.navigate('Registrarse')}/>
        </View>
    </View>
  );
}

function RegistrarseScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [elBotonEstaDesactivado, setelBotonEstaDesactivado] = useState(false);
  
  const [isNameValid, setIsNameValid] = useState(false);
  const [revisarSiEmailEsValida , setrevisarSiEmailEsValida ] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validateFields = () => {
    const nameRegex = /^[A-Za-z\s]+$/; 
    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  
    const validName = nameRegex.test(name);
    const emailValido = expresionEmail.test(email);
    const validPassword = password.length >= 8;

    // Actualizar el estado de isNameValid
    setIsNameValid(validName);
    setrevisarSiEmailEsValida (emailValido);
    setIsPasswordValid(validPassword);

    setelBotonEstaDesactivado(validName && emailValido && validPassword);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}>
        <Image source={{uri: 'https://i.pinimg.com/236x/2a/2e/7f/2a2e7f0f60b750dfb36c15c268d0118d.jpg'}} style={hojaDeEstilos.image} />
        <Text style={hojaDeEstilos.textoToDo}>
          To Do App
        </Text>
        <TextInput style={[hojaDeEstilos.input,!isNameValid && hojaDeEstilos.invalidInput,]} placeholder="Name" keyboardType="text" onChangeText={(text) => {setName(text); validateFields();}}/>
        <TextInput style={[ hojaDeEstilos.input, !revisarSiEmailEsValida  && hojaDeEstilos.invalidInput, ]}placeholder="Type your email" keyboardType="email-address" onChangeText={(text) => {setEmail(text); validateFields();}}/>
        <TextInput style={[hojaDeEstilos.input,!isPasswordValid && hojaDeEstilos.invalidInput, ]} placeholder="Password" keyboardType="default" secureTextEntry={true} onChangeText={(text) => { setPassword(text); validateFields();}}/>
        <Button style={hojaDeEstilos.botones} title="Registrarse" disabled={!elBotonEstaDesactivado} />
      <View style={hojaDeEstilos.contenedor}>
          <Button style={hojaDeEstilos.botones} title="Cambiar Password"  onPress={() => navigation.navigate('Cambiar')} />
        </View>
    </View>
  );
}

function OlvidadaScreeen({ navigation }) {
  const [email, setEmail] = useState("");
  const [elBotonEstaDesactivado, setelBotonEstaDesactivado] = useState(false);
  const [revisarSiEmailEsValida , setrevisarSiEmailEsValida ] = useState(false);
  const validateFields = () => {
    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const emailValido = expresionEmail.test(email);
    setrevisarSiEmailEsValida (emailValido);
    setelBotonEstaDesactivado(emailValido);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}>
      <Image source={{uri: 'https://i.pinimg.com/236x/2a/2e/7f/2a2e7f0f60b750dfb36c15c268d0118d.jpg'}}
              style={hojaDeEstilos.image} />
        <Text style={hojaDeEstilos.textoToDo}>
          To Do App
        </Text>
        <TextInput style={[hojaDeEstilos.input,!revisarSiEmailEsValida  && hojaDeEstilos.invalidInput, ]}placeholder="Ingrese su email" keyboardType="email-address"onChangeText={(text) => {}}/>
        <Button style={hojaDeEstilos.botones} title="Mandar correo" disabled={!elBotonEstaDesactivado} />

        <Button style={hojaDeEstilos.botones} title="Go to Inicio" onPress={() => navigation.navigate('Inicio')}/>
    </View>
  );
}

function CambiarScreen({ navigation }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [elBotonEstaDesactivado, setelBotonEstaDesactivado] = useState(false);
  const validateFields = () => {
    const passwordRegex = /^.{8,}$/; // Contraseña de al menos 8 caracteres
  
    const isNewPasswordValid = passwordRegex.test(newPassword);
    const isConfirmPasswordValid = confirmPassword === newPassword;
  
    // Habilitar el botón solo si todas las contraseñas son válidas
    setelBotonEstaDesactivado(isNewPasswordValid && isConfirmPasswordValid);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}>
      <Image source={{uri: 'https://i.pinimg.com/236x/2a/2e/7f/2a2e7f0f60b750dfb36c15c268d0118d.jpg'}}
              style={hojaDeEstilos.image} />
        <Text style={hojaDeEstilos.textoToDo}>
          To Do App
        </Text>
        <TextInput style={hojaDeEstilos.input} placeholder="Type your old pass" secureTextEntry={true} />
        <TextInput style={hojaDeEstilos.input} placeholder="Type your new pass" secureTextEntry={true} onChangeText={(text) => { setNewPassword(text); validateFields(); }}/>
        <TextInput style={[hojaDeEstilos.input, !elBotonEstaDesactivado && hojaDeEstilos.invalidInput, ]} placeholder="Repita la contraseña" secureTextEntry={true} onChangeText={(text) => {setConfirmPassword(text); validateFields(); }}/>
        <Button style={hojaDeEstilos.botones} title="Confirmar" disabled={!elBotonEstaDesactivado}  />
        <Button style={hojaDeEstilos.botones} title="Olvidada Password" onPress={() => navigation.navigate('Olvidada')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioScreen} options={{ title: 'Inicio' }}/>
        <Stack.Screen name="Registrarse" component={RegistrarseScreen} options={{ title: 'Registrarse' }}/>
        <Stack.Screen name="Olvidada" component={OlvidadaScreeen} options={{ title: 'Contrasena olvidada' }}/>
        <Stack.Screen name="Cambiar" component={CambiarScreen} options={{ title: 'Cambiar contrasena' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
