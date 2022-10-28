import React from "react";
import './Bumper.css';

function Bumper({tekst, classname}){
    return(
        <div className={classname}>
         <p className="bumpertekst">   {tekst} </p>
        </div>

    );
}

export default Bumper;
