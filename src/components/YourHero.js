import React from "react";
import './YourHero.css';
import {query} from
import SearchBar from "./searchBar/SearchBar";

/* in de TopTen staat
* een volledig get-lijst van een held.
* */

function YourHero(combat, durability, intelligence, naam, power, speed, strenght){
    return(
       <span>
          <span className="zwart balkje"> <h2>{naam}</h2>
          </span>
          <span className="powerstats">
              <h3>Powerstats:</h3>
              <p>Combat: {combat}</p>
              <p>Durability: {durability}</p>
              <p>Intelligence: {intelligence}</p>
              <p>Power: {power}</p>
              <p>Speed: {speed}</p>
              <p>Strenght: {strenght}</p>


          </span>
       </span>

    );
}

export default YourHero;


/*
{/!* Wat hieronder staat werkt, maar alleen als de get methode versijst naar
'https://akabab.github.io/superhero-api/api/id/2.json');
           dus naar één specifieke held

<div>
         <span className="held">
      {Object.keys(yourHero).length > 0 &&
          <>
              <h3>1 naam is {yourHero.name}</h3>
              <p>2 gevechtsvaardigheid {yourHero.powerstats.combat}</p>
              <p>3 stamina is {yourHero.powerstats.durability}</p>
              <p>4 kracht is {yourHero.powerstats.strength}</p>
              <p>5 power is {yourHero.powerstats.power}</p>
              <p>6 snelheid is {yourHero.powerstats.speed}</p>
              <p>7 intelligentie is {yourHero.powerstats.intelligence}</p>
              <p>8 lengte is {yourHero.appearance.height[1]}</p>
              <p>9 gewicht is {yourHero.appearance.weight[1]}</p>
              <p>10 geboorteplaats is {yourHero.biography.placeOfBirth}</p>
              <p>11 volledige naam is {yourHero.biography.fullName}</p>
              <p>12 FIRST APPEARANCE {yourHero.biography.firstAppearance}</p>
              <p>13 publisher {yourHero.biography.publisher}</p>
              <p>14 plaatje {yourHero.images.sm}</p>
              <p>15 beroep(en) {yourHero.work.occupation}</p>
          </>
      }
    </span>
</div>*!/}*/
