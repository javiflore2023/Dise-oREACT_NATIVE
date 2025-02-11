import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    // Aquí puedes agregar la lógica de autenticación
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Roblox</Text>

      <TextInput
        style={styles.input}
        placeholder="Username/Email/Phone"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Forgot Password or Username?</Text>

      <TouchableOpacity style={styles.fbButton}>
        <Text style={styles.fbText}>Login with Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#007bff',
    marginBottom: 15,
  },
  fbButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  fbText: {
    color: '#fff',
    fontSize: 16,
  },
  signupText: {
    marginTop: 10,
  },
  signupLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
