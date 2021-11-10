
export function QuestionForm(props){
    const {fonction, question, rep1, rep2, id1, id2, name1, name2} = props;
    return (
        <>
            <div className="carte question">
              <label id="question">{question}</label>
            </div>
            <div className="reponse">
            <input onClick={fonction || ""} className="btn-reponse "type="button" name ={name1} id={id1} value={rep1}/><br/>
            <input onClick={fonction || ""} className="btn-reponse" type="button" name = {name2} id={id2} value={rep2}/>
            </div>
        </>

);
}