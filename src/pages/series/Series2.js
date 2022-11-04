import React, {useEffect, useState} from "react";
import axios from "axios";
import './Series.css';
import Bumper from "../../components/bumper/Bumper";
import SearchBarSeries from "../../components/searchBar/SearchBarSeries";
import SerieInfo from "../../components/serieInfo/SerieInfo";

function Series() {
    const [yourComicHero, setYourComicHero] = useState({});
    const [searchQuerie, setSearchQuerie] = useState('');
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
                tekst="In welke series speelt jouw superheld?"/>
            <Bumper
                classname="bumper4"/>

            <div className="achtergrondseries">
                <SearchBarSeries searchHero={setSearchQuerie} />

                {error && <p className="errormessage"> Held niet gevonden. Is de spelling goed? Is het een Marvelheld? </p>}

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

                            <h2 className="overzichtje">Overzicht comics </h2>
                            <ul className="serieslist">
                                {yourComicHero.data.results[0].comics.items.map ((posts) => {
                                    return<li>
                                        <p className="seriesrecords"> {posts.name} </p>
                                    </li>
                                })}
                            </ul>
                            <h2> Overzicht series: </h2>
                            <ul className="serieslist">
                                {yourComicHero.data.results[0].series.items.map ((posts) => {
                                    return<li>
                                        <SerieInfo serieName={posts.name} url={posts.resourceURI}/>
                                    </li>
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
