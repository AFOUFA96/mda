import React, { useState, useEffect, useRef } from "react";
import { QuestionForm } from "../components/questionForm";
import '../components/styles/nQuestions.css';
import { LoadingSpinner } from "../components/LoadingSpinner";


let count = 1;
export function NQuestions(props) {
  const { text, classes, handleRouterClick } = props;
  const [loading, setLoading] = useState(true);
  const [nextQuestion, setNextQuestion] = useState(0);

  const validateReponse = () => {
    setNextQuestion(count++);
  }
  const reponsesRef = useRef([]);
  const questionsRef = useRef([]);
  useEffect(() => {
    const urlToQuestions = "http://localhost:3001/question";
    const urlToResponses = "http://localhost:3001/question/reponse";
    const questionsPromise = fetch(urlToQuestions);
    const responsesPromise = fetch(urlToResponses);
    Promise.all([questionsPromise, responsesPromise]).then((responses) => {
      return Promise.all(responses.map((response) => {
        return response.json();
      }));
    }).then((json)=>{
          
        questionsRef.current = json[0];
        reponsesRef.current = json[1];
        setLoading(false);
    })
  });
  let x = [];
  const reponses = reponsesRef.current;
  const questions = questionsRef.current;

  const questionItems = [];
  for (const quest of questions) {
    for (const rep of reponses) {
      if (quest.id == rep.id_question) {
        x.push(rep.enonce);
      }
    }
    if(x[0]){
      questionItems.push(<QuestionForm fonction={validateReponse} question={quest.enonce} rep1={x[0]} rep2={x[1]} />);
      x=[];
    }
    else{
      questionItems.push(<div>
        <div className="carte question">
          <label id="question">{quest.enonce}</label>
        </div>
        <div className="reponse">
        <input  className="form-control1  "type="text" id="html" name="fav_language"/><br/>
        </div>
        <input type="submit" onClick={handleRouterClick?.bind(this, "Register") } value="Submit" class="btn btn-primary login"></input>
    </div>);
    }    
  }
  const MyQuestion = (questionItems, nextQuestion) => {
    for (let i = 0; i < questionItems.length; i++) {
      if (nextQuestion == i) {
        return questionItems[i];
      }
    }
  }
  return (
    <>
      <form className="question-form">

        {(loading) ? (<LoadingSpinner bsColor="text-white" size="4rem" />) : (MyQuestion(questionItems, nextQuestion))}

      </form>
    </>
  );
}
