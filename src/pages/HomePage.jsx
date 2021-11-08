import React, {useState, useEffect, useRef } from 'react';
import {CustomButton} from '../components/CustomButton';
import '../components/styles/homePage.css'
import { LoadingSpinner } from "../components/LoadingSpinner"; 


// export function HomePage(props){
//     const{handleRouterClick} = props;
//     const [loading, setLoading] = useState(true);
//     const languesRef = useRef([]);

//     const handleLanguageClick = (langId, evt)=>{
//         // let json={};
//         localStorage.setItem('language',langId);
//         handleRouterClick("NQuestions");
//     }

//       useEffect(() => { //eviter d'utiliser le usestate
//         const urlToLanguages = "http://localhost:3001/langues";
//         fetch(urlToLanguages).then((resp=>resp.text())).then(text=>{
//             let json;
//             try{
//                 json = JSON.parse(text);
//                 languesRef.current = json; //ref pour stocker em mémoire(local storage est mieux que useref)
//                 setLoading(false);
    
//             }catch{
//                 console.log("Error")
//             }
    
            
//         })    
//     });
//     const langues = languesRef.current;
//     let languesItems = []; //Pour Afaf :-)
    
    
//         for (const lang of langues) {
            
//             languesItems.push(<CustomButton key={lang.id} route="NQuestions" handleClick={handleLanguageClick.bind(this,lang.id)} classes="btn-langage" image ={process.env.PUBLIC_URL + '/assets/images/'+ lang.nom +'.jpg'} name={lang.nom} text={lang.nom} />);
            
//         }
//     return(
//         <>
//             <div className="btnContainer">
//             {
//                 loading ? (
//                     <LoadingSpinner bsColor="text-white" size="4rem"/>
//                 ) : (
//                     languesItems)}
//                 {/* <CustomButton route="NQuestions" handleClick ={handleRouterClick} classes="btn-langage" image ={process.env.PUBLIC_URL + '/assets/images/france.png'} text="Français" />
//                 <CustomButton route="NQuestions" handleClick ={handleRouterClick} classes="btn-langage" image ={process.env.PUBLIC_URL + '/assets/images/anglais.jpg'} text="Anglais"/>
//                 <CustomButton route="NQuestions" handleClick ={handleRouterClick} classes="btn-langage" image ={process.env.PUBLIC_URL + '/assets/images/portugais.jpg'} text="Portugais"/>
//                 <CustomButton route="NQuestions" handleClick ={handleRouterClick} classes="btn-langage" image ={process.env.PUBLIC_URL + '/assets/images/espagnol.jpg'} text="Espagnol"/>
//                 <CustomButton route="NQuestions" handleClick ={handleRouterClick} classes="btn-langage mb" image ={process.env.PUBLIC_URL + '/assets/images/arabe.jpg'} text="العربية "/> */}
//             </div>
//         </>
//     );
// }


export class HomePage extends React.Component{
    
    constructor(props){
        super(props);
        this.handleRouterClick = this.props.handleRouterClick;
        
        this.state = {loading: true};
        this.languesRef = React.createRef([]);

    }

    handleLanguageClick = (langId, evt) => {
        localStorage.setItem('language',langId);
        this.handleRouterClick("NQuestions");
    }

    componentDidMount(){ //équivalent de useEffect
        const urlToLanguages = "http://localhost:3001/langues";
            fetch(urlToLanguages).then((resp=>resp.text())).then(text=>{
                let json;
                try{
                    json = JSON.parse(text);
                    this.languesRef.current = json; //ref pour stocker em mémoire(local storage est mieux que useref)
                    this.setState({loading: false});        
                }catch{
                    console.log("Error")
                }
            })
    }

    render(){
        
        const langues = this.languesRef.current || [];
        let languesItems = []; //Pour Afaf :-)
        for (const lang of langues) {   
            languesItems.push(<CustomButton key={lang.id} route="NQuestions" handleClick={this.handleLanguageClick.bind(this,lang.id)} classes="btn-langage" image ={process.env.PUBLIC_URL + '/assets/images/'+ lang.nom +'.jpg'} name={lang.nom} text={lang.nom} />);           
        }

        return(
            <>
                <div className="btnContainer">
                    {this.loading ? ( <LoadingSpinner bsColor="text-white" size="4rem"/> ) : (languesItems)}
                </div>
            </>
        );
    }
}