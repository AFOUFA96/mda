import '../components/styles/register.css';
import React, { useState } from 'react';
import { Extenders } from '../Extenders';
Extenders.init();

export function Register(props) {
    const { text, classes, handleRouterClick } = props;

    const [withPseudo, setWithPseudo] = useState(false);
    const [emailExist, setEmailExist] = useState(false);

    function pseudo() {
        setWithPseudo(true);
    }

    function email(){
        setWithPseudo(false);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        let formData = new FormData(evt.currentTarget);
        const value = JSON.stringify(Object.fromEntries(formData));
       const json = JSON.tryParse(value);
       json.annee = localStorage.getItem("birthYear");
       json.langId = localStorage.getItem("language");
        fetch("http://localhost:3001/utilisateur/register", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "post",
            body: JSON.stringify(json)
        }).then(resp => resp.text()).then(text => {
            const json = JSON.tryParse(text);
            console.log(json.status);
            if(json.status == false){
                setEmailExist(true);
            }
            // if(json.status){
            //     json.allResponces = localStorage.getItem("allResponces");
            //     fetch("http://localhost:3001/utilisateur/reponse",{
            //         headers:{
            //             'Accept' : 'application/json',
            //             'Content-type': 'application/json'
            //         },
            //         method:'post',
            //         body: JSON.stringify(json)
            //         }).then(resp => resp.text()).then(text => {
            //             const json = JSON.tryParse(text);
            //             console.log(json);
            //         })
            // }
        });
    }
    return (
         <>   {/* MESSAGE ACCOUNT EXISTE */}
            {emailExist && <div className="mailExist"><p>Account already exist !</p></div>}
   
            <div className="d-flex myForm">
                <form className="register" id="loginForm" onSubmit={handleSubmit}>
                     {/*CONNEXION AVEC EMAIL */}
                    {!withPseudo &&
                        <div className="mb-3" id="email">
                            <label htmlFor="InputEmail" className="form-label">Adresse email</label>
                            <input type="email" className="form-control" id="InputEmail" name="email" />
                            <a className="underlineHover mb-3 pointer " onClick={pseudo}>vous n'avez pas d'email?</a>
                            {withPseudo}
                        </div>
                    }
{                   /*CONNEXION AVEC PSEUDO */}
                    {withPseudo &&
                        <div className="mb-3" id="pseudo">
                            <label htmlFor="InputPseudo" className="form-label">Pseudo</label>
                            <input type="text" className="form-control" id="InputPseudo" name="pseudo" />
                            <a className="underlineHover mb-3 pointer" onClick={email}>vous avez un email!</a>

                        </div>
                    }

                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label margin-top">Mot de passe</label>
                        <input type="password" className="form-control" id="InputPassword" name="password" />
                    </div>
                    <div id="formFooter">
                        <a className="underlineHover mb-3 ">Mot de passe oublié ?</a>
                    </div>
                    <div className="d-flex justify-content-end">

                        <input  type="submit" className="btn btn-primary login" name="submit" value="login"></input>
                    </div>
                </form>
            </div>
        </>
    );
}


























// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Headers from "./Header";



// export function Register(props){
//     const{text, classes} = props;

//     const [result, setResult] = useState("");
//     const onSubmit = (data) => setResult(JSON.stringify(data));
//     const { register, handleSubmit } = useForm();
//     return(
//         <>
//             <form onSubmit={handleSubmit(onSubmit)}>
//       <Headers />
//       <input {...register("firstName")} placeholder="First name" />
//       <input {...register("lastName")} placeholder="Last name" />
//       <input {...register("Password")} placeholder="Password" />
//       <select {...register("category")}>
//         <option value="">Select...</option>
//         <option value="A">Category A</option>
//         <option value="B">Category B</option>
//       </select>

//       <p>{result}</p>
//       <input type="submit" />
//     </form>

//         </>
//     );
// }
