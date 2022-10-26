import React, {useEffect, useState} from "react";
import SearchBar from "../components/searchBar/SearchBar";
import axios from "axios";
import './Comic.css';
import jwt_decode from 'jwt-decode';
import {Link} from "react-router-dom";




function WhichHeroInComic() {
    const [yourComicHero, setYourComicHero] = useState({});
    const publicKey = '8a621d214f6703c92354d117a0cdb893';
    const privateKey = 'ee113a5aa21a594a97eeda96adc86766a7b56358';
    const [searchQuerie, setSearchQuerie] = useState('');
    const [newEndpoint, setNewEndpoint] = useState('');

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get
                (`http://gateway.marvel.com/v1/public/characters?name=${searchQuerie}&apikey=${process.env.REACT_APP_API_KEY}`);
                setYourComicHero(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        } fetchUserData();
    }, [searchQuerie]);

/*    async function fetchSeriesData(){
        try {
            const response = await axios.get
            (`${newEndpoint}apikey=214f3ccc2da6b6ad008517ceaf43663a`);
                       console.log(response.data);
        } catch(e){
            console.error(e);
        }
    }*/


    return(
        <>
            <div className="achtergrond">
 <h1> Which Hero appeared in which comic? </h1>

            <div>
                <p>Kennelijk moet ik de HEADER van de call aanpassen</p>
                <p>zie: https://developer.marvel.com/docs</p>
                <p>en zie: https://developer.marvel.com/documentation/generalinfo </p>
            </div>

{/*            <button className="ttbutton"
                    onClick={fetchUserData}>
                Klik
            </button>*/}



            <article className="uitslag">
            {Object.keys(yourComicHero).length > 0 &&
            <>
            <h1> er komt data binnen. Lets check! </h1>
                <p> Hier moet met useParam nog een doorlink naar het mysterieuze object. resourceURI : "http://gateway.marvel.com/v1/public/series/13082" </p>
                <p> Voor iedere serie is het handig om een serie-componentje te maken.</p>



            </>
            }
            </article>

                <SearchBar searchHero={setSearchQuerie} />
            </div>
        </>
    );
}

export default WhichHeroInComic;
/*

('https://gateway.marvel.com/v1/public/series?ts=1apikey={process.env.REACT_APP_API_KEY}')*/
