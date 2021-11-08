
import React from "react";
import { FaUserAlt } from 'react-icons/fa';
import {ImSearch} from 'react-icons/im';

// export function MyNavbar(props){
//     const {text, classes, handleRouterClick} = props;
//     return (
//         <nav class="navbar navbar-light bg-light colorNav">
//             <div class="container-fluid">
//             <a onClick={handleRouterClick?.bind(this, "HomePage") } class="navbar-brand" >
//                 <img src={process.env.PUBLIC_URL + '/assets/images/unnamed.png'} alt="logo" /></a>
//                 <div class="d-flex">
//                     <form class="d-flex form-search">
//                         <input class="form-control me-2 inpt" type="search" placeholder="Search" aria-label="Search"/>
//                         <button class="search" type="submit"><ImSearch className="search"/></button>
//                     </form>

//                     <button onClick={handleRouterClick?.bind(this, "Register") } class="search user" type="submit"><FaUserAlt className="search"/></button>
//                 </div>
//             </div>
//         </nav>

//     );
// }

export class MyNavbar extends React.Component{
    constructor(props){
        super(props);
        this.handleRouterClick = this.props.handleRouterClick;
    }
    render(){
        return (
            <nav class="navbar navbar-light bg-light colorNav">
                <div class="container-fluid">
                <a onClick={this.handleRouterClick?.bind(this, "HomePage") } class="navbar-brand" >
                    <img src={process.env.PUBLIC_URL + '/assets/images/unnamed.png'} alt="logo" /></a>
                    <div class="d-flex">
                        <form class="d-flex form-search">
                            <input class="form-control me-2 inpt" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="search" type="submit"><ImSearch className="search"/></button>
                        </form>
    
                        <button onClick={this.handleRouterClick?.bind(this, "Register") } class="search user" type="submit"><FaUserAlt className="search"/></button>
                    </div>
                </div>
            </nav>
    
        );
    }
}