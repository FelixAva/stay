import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { UserRegister } from "@/types/user";
import { InputField } from "@/components";
import { register } from "@/api/api-client";

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      age: '',
      lastGrade: '',
      password: '',
    }
  });

  const onSubmit = (data: UserRegister) => {
    register(data);
    Alert.alert("Éxito", "Registro exitoso.");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Registro</Text>
        <Text style={styles.subtitle}>Completa los datos para registrarte</Text>
      </View>

      <View style={styles.form}>
        {/* Email */}
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "El correo electrónico es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingresa un correo válido",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label='Correo electronico'
                inputProps={{
                  placeholder: "Ingresa tu correo",
                  onBlur: onBlur,
                  onChangeText: onChange,
                  value: value
                }}
                error={errors.email?.message}
              />
            )}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="password"
            rules={{
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputField
                label='Contraseña'
                inputProps={{
                  placeholder: "Ingresa tu contraseña",
                  onBlur: onBlur,
                  onChangeText: onChange,
                  value: value
                }}
                error={errors.password?.message}
              />
            )}
          />
        </View>

        {/* Age */}
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="age"
            rules={{
              required: "La edad es obligatoria",
              pattern: {
                value: /^[0-9]+$/,
                message: "La edad debe ser un número",
              },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputField
                label='Edad'
                inputProps={{
                  placeholder: "Ingresa tu edad",
                  onBlur: onBlur,
                  onChangeText: onChange,
                  value: value
                }}
                error={errors.age?.message}
              />
            )}
          />
        </View>

        {/* Last Grade */}
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="lastGrade"
            rules={{ required: "El grado escolar es obligatorio" }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputField
                label='Ulimo grado escolar'
                inputProps={{
                  placeholder: "Ingresa tu ultimo año de estudio",
                  onBlur: onBlur,
                  onChangeText: onChange,
                  value: value
                }}
                error={errors.lastGrade?.message}
              />
            )}
          />
        </View>

        {/* First Name */}
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="name"
            rules={{ required: "El nombre es obligatorio" }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputField
                label='Nombre'
                inputProps={{
                  placeholder: "Escribe tu nombre",
                  onBlur: onBlur,
                  onChangeText: onChange,
                  value: value
                }}
                error={errors.name?.message}
              />
            )}
          />
        </View>

        {/* Last Name */}
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "El apellido es obligatorio" }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputField
                label='Apellido paterno'
                inputProps={{
                  placeholder: "Escribe tu apellido paterno",
                  onBlur: onBlur,
                  onChangeText: onChange,
                  value: value
                }}
                error={errors.lastName?.message}
              />
            )}
          />
        </View>

        {/* Submit Button */}
        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Registrar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

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
