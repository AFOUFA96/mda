import {HomePage, Register, Needs, Association, NQuestions} from '../pages'


export const Page = (props) => {

    const {route, handleRouterClick } = props;

    return (
        <main>
            
            {route === "HomePage" && <HomePage handleRouterClick={handleRouterClick}/>}
            {route === "Needs" && <Needs handleRouterClick={handleRouterClick}/> }
            {route === "Register" && <Register handleRouterClick={handleRouterClick}/>}
            {route === "Association" && <Association/>}
            {route === "NQuestions" && <NQuestions handleRouterClick={handleRouterClick}/>}
        </main>
    );
}