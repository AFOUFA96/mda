import React, { useState, useEffect, useRef } from "react";
import { QuestionForm } from "../components/questionForm";
import '../components/styles/nQuestions.css';
import { LoadingSpinner } from "../components/LoadingSpinner";
import {Extenders} from '../Extenders';
Extenders.init();

let lastQuestion = false;
let allResponces = [];
let count = 1;
export function NQuestions(props) {
  const { text, classes, handleRouterClick } = props;
  const [loading, setLoading] = useState(true);
  const [nextQuestion, setNextQuestion] = useState(0);
  
  const validateReponse = (evt) => {
    allResponces.push(evt.currentTarget.id);
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

  let json ={
    idRep : [],
    enonceRep : []
  };
  const reponses = reponsesRef.current;
  const questions = questionsRef.current; 
  const questionItems = [];

  for (const quest of questions) {
    for (const rep of reponses) {
      if (quest.id == rep.id_question) {

        json.idRep.push(rep.id);
        json.enonceRep.push(rep.enonce);
      }
    }
    if(json.enonceRep[0]){
      questionItems.push(<QuestionForm fonction={validateReponse} question={quest.enonce} name1={json.idRep[0]} name2={json.idRep[1]} id1={json.idRep[0]} id2={ json.idRep[1]} rep1={json.enonceRep[0]} rep2={json.enonceRep[1]}/>);
      json.idRep =[];
      json.enonceRep =[];
    }
    else{
      
      questionItems.push(<>
                            <div className="carte question">
                               <label id="question">{quest.enonce}</label>
                            </div>
                            <div className="reponse">
                               <input  className="form-control1" type="text" id="html" name="annee"/><br/>
                            </div>
                            <div>
                            <input type="submit" value="Submit" className="btn btn-primary login"></input>
                            </div>
                            </>);
    }    
  }
  const MyQuestion = (questionItems, nextQuestion) => {
    for (let i = 0; i < questionItems.length; i++) {
     
      if (nextQuestion == i) {
        return questionItems[i];
      }
    }
  }

  function hundleSubmit(evt){
    evt.preventDefault();
    let formData = new FormData(evt.currentTarget);
    const value = JSON.stringify(Object.fromEntries(formData));
    const json = JSON.tryParse(value);
    //localstorage birthYear
    localStorage.setItem('birthYear',json.annee);
    localStorage.setItem('allResponces',json.allResponces);
    
    console.log(json);
    // fetch("http://localhost:3001/utilisateur/register", {
    //   headers:{
    //     'Accept' : 'application/json',
    //     'Content-type': 'application/json'
    //   },
    //   method: "post",
    //   body: JSON.stringify(json)
    // }).then(resp => resp.text()).then(text => {
    //   const json = JSON.tryParse(text);
    //   console.log(json);
    // });
    handleRouterClick("Register");
  }
  return (
    <>
      <form className="question-form" onSubmit={hundleSubmit}>

        {(loading) ? (<LoadingSpinner bsColor="text-white" size="4rem" />) : (MyQuestion(questionItems, nextQuestion))}

      </form>
    </>
  );
}
