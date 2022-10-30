import React, {useState} from "react";
import Bumper from "../../components/bumper/Bumper";
import PhotoSlider from "../../components/PhotoSlider/PhotoSlider";

function AboutUs() {

    return (
        <>
            <Bumper
                classname="bumper1"
                tekst="Over de site"
            />
            <h1>
                About us
            </h1>

            <div className="tekstAbout">
                Deze website is gemaakt voor mijn zoon Julius. De functionaliteit is als volgt: In de toptien-pagina kun je ontdekken welke superhelden in de toptien staan van hun unieke kwaliteiten zoals: kracht, snelheid, maar ook gewicht en lengte.Op de Find your hero kun je alle superheld vinden van Marvel en DC Comics en meer te weten komen over wie ze zijn en wat ze doen. Op de Comic pagina vind je uit in welke Comics jouw favoriete superheld voorkomt. Bij They Never Met , kun je ontdekken welke superhelden jouw held nooit tegenkwamen.

            </div>


            <PhotoSlider
                classnaampje="topplaatje3"
                quote={null}
                greatmind="Home of Superhero's"
            />

            <span>
    Om toegang te krijgen tot alle functionaliteiten moet je je even registreren. Je registratie blijft maar één uur geldig. Dus wees er snel bij.
</span>
            <span>
            Donaties aan het van Geijns rampenfonds worden op prijs gesteld.
        </span>

            <PhotoSlider
                classnaampje="topplaatje5"
            />

        </>
    );

}

export default AboutUs;
