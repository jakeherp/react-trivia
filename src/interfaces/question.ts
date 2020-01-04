export interface IQuestion {
  question: string;
  answerChoices: string[];
  correctAnswer: number;
}

export interface IRaw {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}