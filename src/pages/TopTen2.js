import React, {useState} from "react";
import Bumper from "../components/bumper/Bumper";
import axios from 'axios';
import './TopTen.css';
import SearchBar from "../components/searchBar/SearchBar";

function Topten() {
    const [yourHero, setYourHero] = useState({});
    const [searchQuerie, setSearchQuerie] = useState('');

    async function fetchUserData(){
        try {
            const response = await axios.get
            ('https://akabab.github.io/superhero-api/api/all.json');
            console.log(response.data);
            setYourHero(response.data);
        } catch(e){
            console.error(e);
        }
    }

    return(
        <>

            <Bumper
                classname="bumper2"
            />
            <div>
                Zoek de top tien van je favoriete superhelden
            </div>

            <article className="toptiens">
                <button className="ttbutton"
                        onClick={fetchUserData}>
                    Klik voor de sterkste Superhelden
                </button>
            </article>
            <div>
                Hier moet nog bijkomen:
                1) een sortmethode om alleen de sterkste 10 eruit te vissen. (of sort voor sorteren en filter voor de top tien?)?
                2) doorklikbare naam om naar het overzichtskaartje te gaan.
            </div>

            <div className="posts">
                <h1>aantal objecten uit de call is: {yourHero.length}</h1>
                <ol>
                    {yourHero.map((posts) => {
                        return <li>
                            Naam: {posts.name}
                        </li>
                    })}
                </ol>
            </div>



            <SearchBar searchHero={setSearchQuerie} />

        </>
    );
}
export default Topten;


{/*

<button className="ttbutton">
    Klik voor de snelste Superhelden
</button>

<button className="ttbutton">
    Klik voor de slimste Superhelden
</button>

<button className="ttbutton">
    Klik voor de best vechtende Superhelden
</button>
*/}


{/*
 Wat hieronder staat werkt, maar alleen als de get methode versijst naar
'https://akabab.github.io/superhero-api/api/id/2.json');
           dus naar één specifieke held

<div>
         <span className="held">
      {Object.keys(yourHero).length > 0 &&
          <>
              <h3>1 naam is {yourHero.name}</h3>
              <p>2 gevechtsvaardigheid: {yourHero.powerstats.combat}</p>
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
</div>*/}
