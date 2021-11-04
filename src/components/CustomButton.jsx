
export function CustomButton(props){
    const {route, text, name, classes, image,Ico, handleClick} = props;
    return (
        <>
            <button type="button" name = {name} className={"btn_laguageb " + (classes || "")} onClick={handleClick?.bind(this, route)}>
                {/* {image && <div className="drapeau"><img src={image}/></div>}
                {Ico &&<div className="d-flex justify-content-center w-50"> <Ico /></div> } */}
                {image && <div className="drapeau d-flex justify-content-center w-50"><img src={image}/></div>}
                {Ico &&<div className="icon"> <Ico /></div> }
                <div className="text">{text}</div>
            </button>
        </>
    );
}