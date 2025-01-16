import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";

const recentForms = [
  { id: 1, title: "Química: Examen 1", date: "12/01/2025", score: 85 },
  { id: 2, title: "Matemáticas: Examen 2", date: "10/01/2025", score: 90 },
  { id: 3, title: "Historia: Test Rápido", date: "08/01/2025", score: 70 },
];

const categories = [
  { id: 1, name: "Química", progress: 0.8 },
  { id: 2, name: "Matemáticas", progress: 0.6 },
  { id: 3, name: "Historia", progress: 0.9 },
];

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>¡Bienvenido, Félix!</Text>
        <Text style={styles.subtitle}>Tu resumen personal</Text>
      </View>

      {/* Profile Cards */}
      <View style={styles.cardRow}>
        <View style={[styles.card, styles.profileCard]}>
          <Text style={styles.cardTitle}>Porcentaje de Rezago</Text>
          <Text style={styles.cardValue}>15%</Text>
        </View>
        <View style={[styles.card, styles.profileCard]}>
          <Text style={styles.cardTitle}>Porcentaje de Progreso</Text>
          <Text style={styles.cardValue}>85%</Text>
        </View>
      </View>

      {/* Recent Forms */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Historial de Formularios</Text>
        {recentForms.map((form) => (
          <View key={form.id} style={styles.formCard}>
            <Text style={styles.formTitle}>{form.title}</Text>
            <Text style={styles.formDate}>{form.date}</Text>
            <Text style={styles.formScore}>Puntaje: {form.score}%</Text>
          </View>
        ))}
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categorías Exploradas</Text>
        {categories.map((category) => (
          <View key={category.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.percentage}>
                {Math.round(category.progress * 100)}%
              </Text>
            </View>
            <ProgressBar
              progress={category.progress}
              color="#4CAF50"
              style={styles.progressBar}
            />
          </View>
        ))}
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
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flex: 1,
    margin: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  profileCard: {
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  formCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  formDate: {
    fontSize: 14,
    color: "#777",
  },
  formScore: {
    fontSize: 14,
    color: "#4CAF50",
    marginTop: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  percentage: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#e0e0e0",
  },
});
