import React, {useEffect, useState} from "react";
import SearchBar from "../components/searchBar/SearchBar";
import axios from "axios";
import './Series.css';
import Bumper from "../components/bumper/Bumper";




function Series() {
    const [yourComicHero, setYourComicHero] = useState({});
    const publicKey = '8a621d214f6703c92354d117a0cdb893';
    const privateKey = 'ee113a5aa21a594a97eeda96adc86766a7b56358';
    const [searchQuerie, setSearchQuerie] = useState('');
    const [newEndpoint, setNewEndpoint] = useState('');
    const [error, setError ] = useState(false);

    useEffect(() => {
        setError(false)
        async function fetchUserData() {
            try {
                const response = await axios.get
                (`http://gateway.marvel.com/v1/public/characters?name=${searchQuerie}&apikey=${process.env.REACT_APP_API_KEY}`);
               if (response.data.data.results.length === 0){
                   setError(true)
                   setYourComicHero('')
               } else {
                setYourComicHero(response.data);
               }
               console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        } fetchUserData();
    }, [searchQuerie]);

    return(
        <>
                <Bumper
                    classname="bumper1"
                    tekst="In welke series speelt jouw superheld?"
                />
            <div className="achtergrond">
                {error && <p> held niet gevonden. kies een andere held </p>}

                <SearchBar searchHero={setSearchQuerie} />

            {Object.keys(yourComicHero).length > 0 &&
            <>
            <article className="uitslag">

            <h1> er komt data binnen. Lets check! </h1>
                <p> Hier moet met useParam nog een doorlink naar het mysterieuze object. resourceURI : "http://gateway.marvel.com/v1/public/series/13082" </p>
                <p> Voor iedere serie is het handig om een serie-componentje te maken.</p>

                <img src="http://i.annihil.us/u/prod/marvel/i/mg/6/30/4ce5a21096f17.jpg" alt="muckshot" className="heldplaatje"/>
               <h1> Naam: {yourComicHero.data.results[0].name} </h1>
                   <p> {yourComicHero.data.results[0].name} komt voor in {yourComicHero.data.results[0].comics.available} comics.</p>
                <p> {yourComicHero.data.results[0].name} komt voor in {yourComicHero.data.results[0].series.available} series: </p>
                <p> {yourComicHero.data.results[0].series.collectionURI} </p>

                <p> <h2>beschrijving:</h2> {yourComicHero.data.results[0].description} </p>
                <p> Overzicht series</p>

                <ul>
                    {yourComicHero.data.results[0].series.items.map ((posts) => {
                        return <li>
                            {posts.name}
                        </li>
                        // dit met useparams doorlinken naar een nieuw te maken pagina.
                            // waar ik bij topten de id doorgeef,
                        // geef ik nu die resourceURI doorgeven ALS endpoint in een nieuwe async function.
                        // daarachter moet nog de apikey komen (dus in de call naar de database)
                    })}
                </ul>
            </article>
           </>
            }


            </div>
        </>
    );
}

export default Series;
