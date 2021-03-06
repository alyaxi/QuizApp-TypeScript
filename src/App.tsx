import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizData} from './services/quiz_services'
import {QuestionType} from "./Types/quiz_type"
import QuestionCard from './Components/QuestionCard'
const Total_Question = 10

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [submit, setSubmit] = useState(0)
  let [score, setScore] = useState(0)
  let [showResult, setShowResult] = useState(false)
  useEffect(() => {
    async function fetchData( ) {
      const Questions:QuestionType[] = await getQuizData(Total_Question, "easy")
      console.log(Questions);
      setQuiz(Questions)
      
    }
    fetchData()
  },[]);
  const handleSubmit = (e:React.FormEvent<EventTarget>, userEvent: string) => {
    console.log(userEvent);
    const currentQuestHold:QuestionType = quiz[submit]
    console.log("corrected answer" + currentQuestHold.answer + "user selected" + userEvent );
    
    if(userEvent === currentQuestHold.answer ){
      setScore(++score)
    }
    e.preventDefault()
    if(submit !== quiz.length -1)
    setSubmit(++submit)
    else {
      // alert("Your Final Score is: " + score + " out of "+ quiz.length)
      setShowResult(true)
      
    }
  }
  if(!quiz.length)
  return <div className="loader"></div>
  if(showResult){
    return(
      <div className="question-container">
        <h2 className="result-heading">Result</h2>
        <h3>Your Final Score is {score} out of {quiz.length}</h3>
        <p>Refresh To Start Again</p>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuestionCard 
      option={quiz[submit].option}
      question={quiz[submit].question}
      callBack={handleSubmit}
      score = {score}
      quiz = {quiz.length}
      questionNum = {submit + 1}
      totalQuestion= {Total_Question}

      />
    </div>
  );
}

export default App;
