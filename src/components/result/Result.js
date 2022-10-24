import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function Result() {
    const {user} = useContext(AuthContext)
    console.log(watIsDit);
    return (
        <h1> Dit is wat je terugkrijgt: {user} </h1>
    );
}

export default Result;
