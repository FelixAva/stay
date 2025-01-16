import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { ActivityIndicator, RadioButton } from "react-native-paper";
import { getForm } from "@/api/api-client";

export default function App() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [disabled, setIsDisabled] = useState(false);
  const [form, setForm] = useState(null);

  useEffect(() => {
    getForm().then((formData) => setForm(formData))
  }, [])

  if (form === null) {
    return <ActivityIndicator size={100} style={{flex: 1, alignItems: 'center'}} />
  }

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    const evaluatedQuestions = form.questions.map((question) => {
      const userAnswer = answers[question.id];
      const isCorrect = userAnswer === question.correct;
      return {
        ...question,
        isCorrect,
      };
    });

    const score = evaluatedQuestions.filter((q) => q.isCorrect).length;
    return { evaluatedQuestions, score };
  };

  const handleSubmit = () => {
    const { evaluatedQuestions, score } = calculateScore();
    const resultJSON = {
      formId: form.formId,
      title: form.title,
      questions: evaluatedQuestions,
    };

    setIsDisabled(true);
    setResult({ resultJSON, score });
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16, textAlign: 'center' }}>
        {form.title}
      </Text>
      {form.questions.map((question, index) => (
        <View key={question.id} style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, marginBottom: 8 , textAlign: 'center'}}>
            {question.category}
          </Text>
          <Text>
            { index }.- {question.text}
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswer(question.id, Number(value))}
            value={answers[question.id]?.toString() || ""}
          >
            {question.options.map((option, index) => (
              <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value={index.toString()} />
                <Text>{option}</Text>
              </View>
            ))}
          </RadioButton.Group>
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} disabled={ disabled } />
      {result && (
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Resultados:
          </Text>
          <Text>Puntaje total: {result.score}/{form.questions.length}</Text>
          {result.resultJSON.questions.map((q, index) => (
            <Text key={index}>
              {index + 1}. {q.text} - {q.isCorrect ? "Correcto ✅" : "Incorrecto ❌"}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}
