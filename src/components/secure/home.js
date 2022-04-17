import { useState } from "@hookstate/core";
import { React, useEffect } from "react";
import {
  getAnswers,
  getListOfQuestions,
  showResults,
} from "../../services/questions";
import store from "../../store";
import Questions from "./questions-d-interrogation";
import Results from "./results";

function Home() {
  const { user, questions, answers, results } = useState(store);

  useEffect(() => {
    showResults(user.uid.get());
    getListOfQuestions();
    getAnswers(user.uid.get());
  }, []);
  if (results.length !== 0) {
    return <Results />;
  }
  console.log(questions.get());
  return (
    <Questions
      listOfQuestions={questions.get()}
      answersDictionary={answers.get()}
    />
  );
}

export default Home;
