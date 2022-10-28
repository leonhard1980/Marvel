import React, { useState, useEffect }from "react";
import axios from "axios";
import './SearchHero.css';
import SearchBar from "../components/searchBar/SearchBar";
import Bumper from "../components/bumper/Bumper";

function SearchHero() {
 const[yourFavoriteHero, setYourFavoriteHero] = useState({});
 const[searchQuerie, setSearchQuerie] = useState('');
 const [error, setError ] = useState(false);


    useEffect(() => {
        setError(false)
        async function fetchHeroData(){
        try {
            const response = await axios.get
            ('https://akabab.github.io/superhero-api/api/all.json');
            const gekozenHeld = response.data.filter((hero) => {
                if(hero.name === searchQuerie){
                    return true
                    setError(true)
                } else {
                 return false
                }
            })
            console.log(gekozenHeld)
            setYourFavoriteHero(gekozenHeld);

        } catch(e){
            console.error(e);
        }
    }  fetchHeroData();

    }, [searchQuerie]);



    return(
        <>
            <div className="kop">
            <Bumper
                classname="bumper1"
                tekst="Zoek hier jouw favoriete superheld"
            />


                <SearchBar setQuery={setSearchQuerie} query={searchQuerie}/>

                {error && <h3 className="foutmelding"> held niet gevonden. Let op helden zijn 'case-sensitive'. </h3>}

            {Object.keys(yourFavoriteHero).length > 0 &&
                <>
                    <div className="jouwheld">
                     <h1 className="naam">{yourFavoriteHero[0].name}</h1>
                        <article className="appearance">
                            <span className="bovenkant">
                            <span>
                            <img src={yourFavoriteHero[0].images.md} alt="muckshot" className="afbeelding"/>
                            </span>
                            <span>
                        <div className="heldgegevens">
                            <p className="gegevens"> <p className="records"> volledige naam: </p>  {yourFavoriteHero[0].biography.fullName} </p>
                            <p className="gegevens"> <p className="records">Geboorteplaats:</p> {yourFavoriteHero[0].biography.placeOfBirth} </p>
                            <p className="gegevens"> <p className="records">afkomst: </p>{yourFavoriteHero[0].appearance.race}</p>
                            <p className="gegevens"> <p className="records">kleur ogen: </p>{yourFavoriteHero[0].appearance.eyeColor}</p>
                            <p className="gegevens"> <p className="records">haarkleur: </p>{yourFavoriteHero[0].appearance.hairColor}</p>
                            <p className="gegevens"> <p className="records">geslacht:</p> {yourFavoriteHero[0].appearance.gender}</p>
                            <p className="gegevens"> <p className="records">lengte: </p>{yourFavoriteHero[0].appearance.height[1]} </p>
                            <p className="gegevens"> <p className="records">gewicht:</p> {yourFavoriteHero[0].appearance.weight[1]} </p>
                            <p className="gegevens"> <p className="records">Hoort bij: </p>the {yourFavoriteHero[0].biography.alignment} guys</p>
                            <p className="gegevens"> <p className="records">debuut:</p> {yourFavoriteHero[0].biography.firstAppearance} </p>
                            <p className="gegevens"> <p className="records">Uitgever:</p> {yourFavoriteHero[0].biography.publisher} </p>
                            <p className="gegevens"> <p className="records">Beroep: </p>{yourFavoriteHero[0].work.occupation} </p>
                            <p className="gegevens"> <p className="records">Plaats: </p>{yourFavoriteHero[0].work.base} </p>
                        </div>
                            <div className="powerstats-container">
                            <div>
                            <p className="powerstats"> <p className="records">Intelligentie:</p> {yourFavoriteHero[0].powerstats.intelligence} </p>
                            <p className="powerstats"> <p className="records">Vechtkracht:</p> {yourFavoriteHero[0].powerstats.combat} </p>
                            </div>
                            <div>
                            <p className="powerstats"> <p className="records">Snelheid:</p>{yourFavoriteHero[0].powerstats.speed} </p>
                            <p className="powerstats"> <p className="records">Stamina: </p> {yourFavoriteHero[0].powerstats.durability}</p>
                            </div>
                            <div>
                            <p className="powerstats"> <p className="records">Power:</p> {yourFavoriteHero[0].powerstats.power} </p>
                            <p className="powerstats"> <p className="records">Kracht: </p>{yourFavoriteHero[0].powerstats.strength} </p>
                            </div>
                            </div>
                            </span>
                            </span>
                            <div className="extrainfo">
                            <p className="gegevens"> <p > <p className="records">Verbonden: </p> {yourFavoriteHero[0].connections.groupAffiliation} </p> </p>
                            <p className="gegevens"> <p > <p className="records">Familieleden:</p>  {yourFavoriteHero[0].connections.relatives} </p> </p>
                            </div>
                        </article>
                        <span>
                      </span>
                    </div>
                </>
            }
            </div>


      {/*      <Bumper
                classname="bumper1"
                tekst="Zoek je favoriete superheld"
            />*/}

        </>
    )
};

export default SearchHero;
