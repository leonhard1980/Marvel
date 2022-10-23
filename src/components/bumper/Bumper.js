import React from "react";
import './Bumper.css';

function Bumper({tekst, classname}){
    return(
        <div className={classname}>
            {tekst}
        </div>

    );
}

export default Bumper;
