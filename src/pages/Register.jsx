import '../components/styles/register.css';
import React, { useState } from 'react';

export function Register(props) {
    const { text, classes, handleRouterClick } = props;

    const [withPseudo, setWithPseudo] = useState(false);


    function pseudo() {
        // let email = document.getElementById("email");
        // email.innerHTML = '  <label for="InputPseudo" class="form-label"> Pseudo<label/> <input type="pseudo" class="form-control" id="InputPseudo" name="pseudo"/> ';
        setWithPseudo(true);
    }

    function email(){
        setWithPseudo(false);
    }
    return (
        <>
            <div className="d-flex myForm">
                <form class="register" id="loginForm">
                    {!withPseudo &&
                        <div class="mb-3" id="email">
                            <label for="InputEmail" class="form-label">Adresse email</label>
                            <input type="email" class="form-control" id="InputEmail" name="email" />
                            <a class="underlineHover mb-3 pointer " onClick={pseudo}>vous n'avez pas d'email?</a>
                            {withPseudo}
                        </div>
                    }

                    {withPseudo &&
                        <div class="mb-3" id="pseudo">
                            <label for="InputPseudo" class="form-label">Pseudo</label>
                            <input type="text" class="form-control" id="InputPseudo" name="pseudo" />
                            <a class="underlineHover mb-3 pointer" onClick={email}>vous avez un email!</a>

                        </div>
                    }

                    <div class="mb-3">
                        <label for="InputPassword" class="form-label margin-top">Mot de passe</label>
                        <input type="password" class="form-control" id="InputPassword" name="password" />
                    </div>
                    <div id="formFooter">
                        <a class="underlineHover mb-3 ">Mot de passe oublié ?</a>
                    </div>
                    <div className="d-flex justify-content-end">

                        <input onClick={handleRouterClick?.bind(this, "Needs") } type="submit" class="btn btn-primary login" name="submit" value="login"></input>
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
