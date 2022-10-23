import React from "react";
import './Home.css';
import Bumper from "../components/bumper/Bumper";


function Home() {
    return(
        <>
            <Bumper
                classname="bumper1"
            />
        <div className="pagecontainer">
Dit is de Home Pagina
            <p>- Hier moeten de persoongegevens vanuit de database inlopen</p>
            <p>- Het fotootje moet veranderen per geslacht OF uit de database komen</p>
            <p>- De knop voor orderhistory moet alle aankopen ophalen uit database</p>

        </div>



        </>
    );
}

export default Home;
