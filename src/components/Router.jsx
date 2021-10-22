import {MyNavbar, Page} from './';
// import {Page} from './Page';
import React, {useState} from 'react';

export const Router = (props) => {

    const [route, setRoute] = useState(window.history.state || 'HomePage')

    window.onpopstate = (evt) => { //pour les 2 fleches du navig: retour en arrière et en avant
        setRoute(window.history.state || 'HomePage')
    }

    const handleRouterClick = (route) => { //pour garder l'historique
        window.history.pushState(route, route);
        setRoute(route);
    }

    return (
        <>
            <MyNavbar handleRouterClick={handleRouterClick}/>
            <Page route={route} handleRouterClick={handleRouterClick}/>
        </>
    );
}