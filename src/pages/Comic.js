import React, {useState} from "react";
import SearchBar from "../components/searchBar/SearchBar";
import axios from "axios";
import './Comic.css';
import jwt_decode from 'jwt-decode';




function WhichHeroInComic() {
/*    const token = 214f3ccc2da6b6ad008517ceaf43663a;*/

/*
    const decoded = jwt_decode(token);
*/
/*
    process.env.REACT_APP_API_KEY
*/
    const [yourComicHero, setYourComicHero] = useState({});
const publicKey = '8a621d214f6703c92354d117a0cdb893';
const privateKey = 'ee113a5aa21a594a97eeda96adc86766a7b56358';
    const [searchQuerie, setSearchQuerie] = useState('');


    async function fetchUserData(){
        try {
            const response = await axios.get
            (`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=214f3ccc2da6b6ad008517ceaf43663a`);
        setYourComicHero(response.data);
        console.log(response.data);
            setYourComicHero(response.data);
        } catch(e){
            console.error(e);
       }
    }
    return(
        <>
            <div className="achtergrond">
 <h1> Which Hero appeared in which comic? </h1>

            <div>
                <p>Kennelijk moet ik de HEADER van de call aanpassen</p>
                <p>zie: https://developer.marvel.com/docs</p>
                <p>en zie: https://developer.marvel.com/documentation/generalinfo </p>
            </div>

            <button className="ttbutton"
                    onClick={fetchUserData}>
                Klik
            </button>



            <article className="uitslag">
            {Object.keys(yourComicHero).length > 0 &&
            <>
            <h1> er komt data binnen. Lets check! </h1>
{/*

           <div> {yourComicHero.results.8.series.name} </div>

*/}

            </>
            }
            </article>


            <SearchBar/>
                <SearchBar searchHero={setSearchQuerie} />

            </div>
        </>
    );
}

export default WhichHeroInComic;
/*

('https://gateway.marvel.com/v1/public/series?ts=1apikey={process.env.REACT_APP_API_KEY}')*/
