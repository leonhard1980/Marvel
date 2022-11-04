import React from "react";
import Bumper from "../../components/bumper/Bumper";
import PhotoSlider from "../../components/photoSlider/PhotoSlider";

function AboutUs() {

    return (
        <>
            <Bumper
                classname="bumper2"
                tekst="Over de site"
            />

            <div className="pagecontainer">
                <article className="hometalk">
                    <h1> About us </h1>
                    <p className="bodytext">
                        Deze site is gemaakt voor mijn zoon Julius die na zijn belangstelling voor
                        dino's nu samen met zijn vriendjes de superhelden heeft ontdekt. Eindeloos
                        vroegen ze zich af wie de beste vechter was, wie het sterkst en wie er bij 'de goeien' horen.
                        Die gesprekken leken regelmatig beslecht te worden door degene met de grootste mond en onderhavig
                        aan de voorkeur van het moment.
                    </p>

                    <p className="bodytext">
                        Met deze site wilde ik voor hem en voor alle kleine jongetjes die zich hetzelfde afvragen
                        antwoord te bieden. Ik hoop dat ik daarin geslaagd ben.
                    </p>
                    <PhotoSlider
                        classnaampje="topplaatje3"
                        quote={null}
                    />

                    <p className="bodytext">
                        De informatie van de website komt van de officiële database van Marvel
                        en van 'Multiple universes superheroes open-source REST API'. Door de begrenzing
                        op de database van Marvel kon ik lang niet alle informatie over comics en series
                        op mijn website tonen. Ik heb volstaan met een lijst van 20 comics en series. Hopelijk
                        zal Marvel in de toekomst iets genereuzer omgaan met zijn data. Op Marvel.com
                        is overigens nog wél een schat aan informatie te vinden over al hun helden.
                    </p>
                    <p className="bodytext">
                      Deze website vormt mijn afstudeerproject Frontend van de Hogeschool Novi in Utrecht.
                    </p>


                </article>
            </div>




        </>
    );

}

export default AboutUs;
