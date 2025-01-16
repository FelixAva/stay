interface FormData {
  formId: number;
  title: string;
  questions: Question[];
}

interface Question {
  id: number;
  category: string;
  text: string;
  options: any[];
  correct: number;
}

export {
  FormData,
  Question
}
