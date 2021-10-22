import '../components/styles/association.css'


export function Association(props){
    return(
        <>
            <div className="d-flex asso carte" >
                <div >
                <img  src={process.env.PUBLIC_URL + '/assets/images/droitaulog-asso.jpg'} alt="" />
                </div>
                <div className="title-asso">
                <h5>Droit Au Logement (DAL)</h5>
                </div>
            </div>
            <div className="coordonnees-asso carte">
                email<br/>
                adresse<br/>
                telephone<br/>
                lien
            </div>
            <div className="description-asso carte">
            L’Association Droit Au Logement (DAL) a été créée en 1990, par des familles mal-logées ou sans-logis et des militants associatifs de quartier, dans le 20ème arrondissement de Paris.
            </div>
        </>
    );
}
