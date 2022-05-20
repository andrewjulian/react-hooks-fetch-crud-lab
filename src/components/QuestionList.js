import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [quizQuestions, setQuizQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQuizQuestions(data));
  }, [quizQuestions]);

  const displayQuestions = quizQuestions.map((question, index) => {
    return <QuestionItem question={question} key={index} /> 
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      {displayQuestions}
    </section>
  );
}

export default QuestionList;
