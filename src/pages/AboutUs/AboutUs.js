import React from "react";
import Bumper from "../../components/bumper/Bumper";
import PhotoSlider from "../../components/PhotoSlider/PhotoSlider";

function AboutUs() {

return(
    <>
        <Bumper
            classname="bumper1"
            tekst="Over de site"
        />
    <h1>
        About us
    </h1>

        <div className="colums-3">
        <span> Deze website is gemaakt voor mijn zoon Julius.</span>
        <span>   De functionaliteit is als volgt: </span>

        <span> In de <b>toptien-pagina </b>kun je ontdekken welke superhelden in de toptien staan van hun unieke kwaliteiten zoals:
            kracht, snelheid, maar ook gewicht en lengte.</span>

            Op de <b> Find your hero </b> kun je alle superheld vinden van Marvel en DC Comics en meer te weten komen over wie ze zijn en wat ze doen.

            Op de <b>Comic pagina </b> vind je uit in welke Comics jouw favoriete superheld voorkomt.

            Bij <b>They Never Met </b>, kun je ontdekken welke superhelden jouw held nooit tegenkwamen.

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
