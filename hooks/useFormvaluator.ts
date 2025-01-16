import React, { useState } from "react";

const useFormEvaluator = (form: any) => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [results, setResults] = useState<any[]>([]);

  const setAnswer = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    const result = form.questions.map((q: any) => {
      const isCorrect = answers[q.id] === q.correct;
      if (isCorrect) score += 1;
      return {
        id: q.id,
        text: q.text,
        isCorrect,
        correctAnswer: q.options[q.correct],
        selectedAnswer: q.options[answers[q.id]] ?? null,
      };
    });
    setResults(result); // Guarda los resultados para mostrarlos
    console.log(result)
    return { score, result };
  };

  return { answers, setAnswer, calculateScore, results };
};

export default useFormEvaluator;
