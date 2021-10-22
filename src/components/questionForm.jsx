
export function QuestionForm(props){
    const {fonction, question, rep1, rep2} = props;
    return (
        <div>
            <div className="carte question">
              <label id="question">{question}</label>
            </div>
            <div className="reponse">
            <input onClick={fonction || ""} className="btn-reponse "type="button" id="html" name="fav_language" value={rep1}/><br/>
            <input onClick={fonction || ""} className="btn-reponse" type="button" id="css" name="fav_language" value={rep2}/>
            </div>
        </div>

);
}