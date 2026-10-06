// src/screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { login } from '../services/authService';
import { colors } from '../styles/colors';
 
export default function LoginScreen({ navigation }) {
  // ----- Estado del componente -----
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);
 
  // ----- Validación de campos -----
  const validar = () => {
    const nuevosErrores = {};
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if (!email.trim()) {
      nuevosErrores.email = 'El correo es obligatorio';
    } else if (!regexCorreo.test(email.trim())) {
      nuevosErrores.email = 'Ingresa un correo válido';
    }
 
    if (!password) {
      nuevosErrores.password = 'La contraseña es obligatoria';
    } else if (password.length < 6) {
      nuevosErrores.password = 'Mínimo 6 caracteres';
    }
 
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };
 
  // ----- Acción del botón "Iniciar sesión" -----
  const handleLogin = async () => {
    if (!validar()) return;
 
    setCargando(true);
    try {
      const usuario = await login(email, password);
      navigation.replace('Home', { usuario });
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setCargando(false);
    }
  };
 
  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Image
              source={require('../../assets/icon.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
 
            <CustomInput
              label="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              placeholder="correo@ejemplo.com"
              keyboardType="email-address"
              error={errores.email}
            />
 
            <CustomInput
              label="Contraseña"
              value={password}
              onChangeText={setPassword}
              placeholder="••••••"
              secureTextEntry={!mostrarPassword}
              error={errores.password}
            />
 
            <Pressable onPress={() => setMostrarPassword(!mostrarPassword)}>
              <Text style={styles.link}>
                {mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              </Text>
            </Pressable>
 
            <CustomButton
              title="Iniciar sesión"
              onPress={handleLogin}
              loading={cargando}
            />
 
            <Text style={styles.hint}>Demo: admin@demo.com / 123456</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.text,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textMuted,
    marginBottom: 24,
  },
  link: {
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 16,
    alignSelf: 'flex-end',
  },
  hint: {
    marginTop: 16,
    fontSize: 12,
    color: colors.textMuted,
  },
});