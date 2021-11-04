
export function QuestionForm(props){
    const {fonction, question, rep1, rep2, id1, id2} = props;
    return (
        <div>
            <div className="carte question">
              <label id="question">{question}</label>
            </div>
            <div className="reponse">
            <input onClick={fonction || ""} className="btn-reponse "type="button" id={id1} value={rep1}/><br/>
            <input onClick={fonction || ""} className="btn-reponse" type="button" id={id2} value={rep2}/>
            </div>
        </div>

);
}