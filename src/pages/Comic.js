import React, {useState} from "react";
import SearchBar from "../components/searchBar/SearchBar";
import axios from "axios";



function WhichHeroInComic() {
    const [yourComicHero, setYourComicHero] = useState({});
const publicKey = '8a621d214f6703c92354d117a0cdb893';
const privateKey = 'ee113a5aa21a594a97eeda96adc86766a7b56358';

    async function fetchUserData(){
        try {
            const response = await axios.get('https://gateway.marvel.com/v1/public/series?ts=1apikey={process.env.REACT_APP_API_KEY}');
        setYourComicHero(response.data);
        console.log(response.data);
            setYourComicHero(response.data);
        } catch(e){
            console.error(e);
                 }
    }


    return(
        <>
 <h1> Which Hero appeared in which comic? </h1>

            <div>
                Hier moet komen: een api call. Het lukt nu nog niet om contact te maken.
                <p>Kennelijk moet ik de HEADER van de call aanpassen</p>
                <p>zie: https://developer.marvel.com/docs</p>
                <p>en zie: https://developer.marvel.com/documentation/generalinfo </p>
            </div>

            <button className="ttbutton"
                    onClick={fetchUserData}>
                Klik voor de sterkste Superhelden
            </button>

            <SearchBar/>



        </>
    );
}

export default WhichHeroInComic;
