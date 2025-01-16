import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { InputField } from "@/components";
import { login } from "@/api/api-client";
import { UserLogin } from "@/types/user";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: UserLogin) => {
    login(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>

      {/* Campo de correo */}
      <View style={styles.inputContainer}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "El correo es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Introduce un correo válido",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              label='Correo electronico'
              inputProps={{
                placeholder: "Escribe tu correo",
                onBlur: onBlur,
                onChangeText: onChange,
                value: value
              }}
              error={errors.email?.message}
            />
          )}
        />
      </View>

      {/* Campo de contraseña */}
      <View style={styles.inputContainer}>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              label='Contraseña'
              inputProps={{
                placeholder: "Escribe tu contraseña",
                onBlur: onBlur,
                onChangeText: onChange,
                value: value
              }}
              error={errors.password?.message}
            />
          )}
        />
      </View>

      {/* Botón de inicio de sesión */}
      {/* Submit Button */}
      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Iniciar Sesion</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: 16,
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
