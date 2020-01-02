import { IQuestion } from "../interfaces/question";

export const loadQuestions = async (amount = 15, category = 9, difficulty = 'hard') => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  try {
    const res = await fetch(url);
    const { results } = await res.json();

    return convertQuestions(results);
  } catch (err) {
    console.error(err)
  }
};

const convertQuestions = (rawQuestion: any) => {
  return rawQuestion.map((loadedQuestion: any) => {
    const formattedQuestion: IQuestion = {
      question: loadedQuestion.question,
      answerChoices: [...loadedQuestion.incorrect_answers]
    };
    formattedQuestion.correctAnswer = Math.floor(Math.random() * 4);
    formattedQuestion.answerChoices.splice(
      formattedQuestion.correctAnswer,
      0,
      loadedQuestion.correct_answer
    );

    return formattedQuestion;
  });
}