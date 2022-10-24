import React, {useEffect, useState} from "react";
import SearchBar from "../components/searchBar/SearchBar";
import Bumper from "../components/bumper/Bumper";
import axios from "axios";
import PhotoSlider from "../components/PhotoSlider/PhotoSlider";
import {useParams} from "react-router-dom";
import './FindYourHero.css';
import HeroCard from "../components/herocard/HeroCard";
import {Link} from "react-router-dom";


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


            {Object.keys(yourHero).length && <HeroCard
                heroName={yourHero.name}
                fullName={yourHero.biography.fullName} //if null dan: onbekend
                height={yourHero.appearance.height[1]} //if null dan: onbekend
                weight={yourHero.appearance.weight[1]} //if null dan: onbekend
                placeOfBirth={yourHero.biography.placeOfBirth}
                alignment={yourHero.biography.alignment}
                publisher={yourHero.biography.publisher}
                duration={yourHero.powerstats.durability}
                combat={yourHero.powerstats.combat}
                intelligence={yourHero.powerstats.intelligence}
                speed={yourHero.powerstats.speed}
                power={yourHero.powerstats.power}
                strength={yourHero.powerstats.strength}
            />}


{/*
            {yourHero && <article> <p>Naam: {yourHero.name}</p> </article> }
*/}

            <article>
                <Link to="/"> Terug naar Home></Link>
             </article>

            <PhotoSlider
                classnaampje="topplaatje11"
                quote={null}
                greatmind="We love Superheroes"
            />


        </>
    );
};

export default FindYourHero;
