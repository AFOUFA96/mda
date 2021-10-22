

export function LoadingSpinner(props) {

    const {size, bsColor} = props;

    return (
        
        <div className="spinner">
            &nbsp;
            <div className={"spinner-border " + (bsColor || "")} 
                 style={{height: (size || "2rem"), width: (size || "2rem")}}
                 role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

}