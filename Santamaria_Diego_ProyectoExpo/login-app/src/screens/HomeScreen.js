// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
import CustomButton from '../components/CustomButton';
import { colors } from '../styles/colors';
 
export default function HomeScreen({ navigation, route }) {
  // Datos enviados desde LoginScreen con navigation.replace('Home', { usuario })
  const { usuario } = route.params;
 
  const cerrarSesion = () => {
    navigation.replace('Login');
  };
 
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>¡Hola, {usuario.nombre}!</Text>
        <Text style={styles.text}>Sesión iniciada como {usuario.email}</Text>
        <CustomButton title="Cerrar sesión" onPress={cerrarSesion} />
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: colors.textMuted,
    marginBottom: 24,
  },
});