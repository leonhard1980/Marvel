import React, {useEffect, useState} from "react";
import axios from "axios";
import './Series.css';
import Bumper from "../../components/bumper/Bumper";
import SearchBarSeries from "../../components/searchBar/SearchBarSeries";
import {Link} from "react-router-dom";



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
                (`http://gateway.marvel.com/v1/public/characters?name=${searchQuerie}&limit=25&apikey=${process.env.REACT_APP_API_KEY}`);
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
                    classname="bumper2"
                    tekst="In welke series speelt jouw superheld?"
                />
            <Bumper
                classname="bumper4"
            />

{/*
            <h1> er komt data binnen. Lets check! </h1>
            <p> Hier moet met useParam nog een doorlink naar het mysterieuze object. resourceURI : "http://gateway.marvel.com/v1/public/series/13082" </p>
            <p> Voor iedere serie is het handig om een serie-componentje te maken.</p>
*/}



            <div className="achtergrondseries">
                <SearchBarSeries searchHero={setSearchQuerie} />

                {error && <p> held niet gevonden. kies een andere held </p>}


            {Object.keys(yourComicHero).length > 0 &&
            <>
            <article className="uitslag">
                <h1> Naam: {yourComicHero.data.results[0].name} </h1>
            <article className="portretje">
                <div>
                <img src={`${yourComicHero.data.results[0].thumbnail.path}`+`.jpg`} alt="muckshot"
                     className="heldplaatje"/>
                </div>
                <div>
                     <h2>Beschrijving:</h2> <p className="description">{yourComicHero.data.results[0].description} </p>
                </div>
            </article>
                <div className="aantalSeries">
                <h3> {yourComicHero.data.results[0].name} komt voor in {yourComicHero.data.results[0].comics.available} comics.</h3>
                <h3> {yourComicHero.data.results[0].name} komt voor in {yourComicHero.data.results[0].series.available} series: </h3>
                <h3> {yourComicHero.data.results[0].name} komt voor in {yourComicHero.data.results[0].stories.available} stories: </h3>
                <h3> {yourComicHero.data.results[0].name} komt in totaal {yourComicHero.data.results[0].stories.available+yourComicHero.data.results[0].series.available+yourComicHero.data.results[0].comics.available} keer voor: </h3>
                </div>

                <h2 className="overzichtje">Overzicht series </h2>
                <ul className="serieslist">
                    {yourComicHero.data.results[0].comics.items.map ((posts) => {
                        return<li>
                                             <p className="seriesrecords"> {posts.name} </p>

                        </li>
                        // hier moet mogelijk een TimeStamp en een Hash.
                        //offset is 20, dan kun je de volgende twintig doen.
                        // dit met useparams doorlinken naar een nieuw te maken pagina.
                            // waar ik bij topten de id doorgeef,
                        // geef ik nu die resourceURI doorgeven ALS endpoint in een nieuwe async function.
                        // daarachter moet nog de apikey komen (dus in de call naar de database)
                    })}
                </ul>
                <h2> Overzicht series: </h2>
                <ul className="serieslist">
                    {yourComicHero.data.results[0].series.items.map ((posts) => {
                        return<li>
{/*
                            <Link to={`/serieshero?uri=${posts.resourceURI}`}>
*/}

                                <p className="seriesrecords"> {posts.name} </p>
                       {/*     </Link>*/}
                        </li>
                        // dit met useparams doorlinken naar een nieuw te maken pagina.
                        // waar ik bij topten de id doorgeef,
                        // geef ik nu die resourceURI doorgeven ALS endpoint in een nieuwe async function.
                        // daarachter moet nog de apikey komen (dus in de call naar de database)
                            })}
                </ul> // hier kan fetch more.
            </article>
           </>
            }


            </div>
        </>
    );
}

export default Series;
