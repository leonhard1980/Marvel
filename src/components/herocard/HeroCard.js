import React from "react";
import './HeroCard.css';

function HeroCard( { heldfoto, heroName, fullName, height, weight, placeOfBirth, alignment, publisher, occupation, duration, combat, intelligence, speed, power, strength}) {
    return(
        <>


            <div className="herokaartje">
            <h1 className="naam"> {heroName} </h1>
                    <div className="persoonsgegevens">
                           <span className="heldenplaatje">
                                <img src={heldfoto} alt="muckshot" />
                            </span>
                            <span className="naw">
                            <p className="ptje"> Volledige Naam: {fullName} </p>
                            <p className="ptje"> Lengte: {height} </p>
                            <p className="ptje"> Gewicht: {weight} </p>
                            <p className="ptje"> Geboorteplaats: {placeOfBirth} </p>
                            <p className="ptje"> Hoort bij: The {alignment} guys</p>
                            <p className="ptje"> publisher: {publisher} </p>
                            <p className="ptje"> Beroep: {occupation} </p>
                            </span>
                    </div>

                    <div className="gevechtsgegevens">
                            <h3>gevechtsgegevens</h3>
                            <p className="ptje"> Uithoudingsvermogen: {duration} punten</p>
                            <p className="ptje"> Gevechtsvermogen: {combat} punten</p>
                            <p className="ptje"> Intelligentie: {intelligence} punten</p>
                            <p className="ptje"> Snelheid: {speed}  punten</p>
                            <p className="ptje"> Kracht: {power}  punten</p>
                            <p className="ptje"> Power: {strength} punten</p>
                    </div>




            </div>


        </>
    );
}

export default HeroCard;
