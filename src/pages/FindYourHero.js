import React, {useEffect, useState} from "react";
import Bumper from "../components/bumper/Bumper";
import axios from "axios";
import PhotoSlider from "../components/PhotoSlider/PhotoSlider";
import {useParams} from "react-router-dom";
import './FindYourHero.css';
import HeroCard from "../components/herocard/HeroCard";
import {Link, useHistory} from "react-router-dom";
import PoundsToKilo from "../components/helpers/PoundsToKilo";


// gebruiker typt batman
// dan een api call naar de ALL


export function FindYourHero() {

    const [yourHero, setYourHero] = useState({});
    const { blogId } = useParams();


   useEffect(() => {async function fetchHeroData(){
       try {
           const response = await axios.get
           (`https://akabab.github.io/superhero-api/api/id/${blogId}.json`);
           setYourHero(response.data);
           console.log(response.data);
       } catch(e){
           console.error(e);
       }
   }
       fetchHeroData();
       console.log(yourHero);}, [] );


    return (

        <>
        <Bumper
            classname="bumper1"
        tekst="Dit is de held waar je meer over wilde weten"/>

            <div className="achtergrond">
                <div className="buffer">
            {Object.keys(yourHero).length && <HeroCard

                heldfoto={yourHero.images.sm}
                heroName={yourHero.name}
                fullName={yourHero.biography.fullName} //if null dan: onbekend
                height={yourHero.appearance.height[1]} //if null dan: onbekend
                weight={yourHero.appearance.weight[1]} //if null dan: onbekend
                placeOfBirth={yourHero.biography.placeOfBirth}
                alignment={yourHero.biography.alignment}
                occupation={yourHero.work.occupation}
                publisher={yourHero.biography.publisher}
                duration={yourHero.powerstats.durability}
                combat={yourHero.powerstats.combat}
                intelligence={yourHero.powerstats.intelligence}
                speed={yourHero.powerstats.speed}
                power={yourHero.powerstats.power}
                strength={yourHero.powerstats.strength}
            />}
                   </div>
                <article className="linkje">
                    <Link to="/topten"> Terug naar Top 100 ></Link>
                </article>
            </div>

            <PhotoSlider
                classnaampje="topplaatje11"
                quote={null}
                greatmind="We love Superheroes"
            />


        </>
    );
};

export default FindYourHero;
