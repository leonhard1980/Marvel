import React from "react";
import './Home.css';
import Bumper from "../../components/bumper/Bumper";
import PhotoSlider from "../../components/photoSlider/PhotoSlider";


function Home() {
    return(
        <>
            <Bumper
                classname="bumper1"
            />
        <div className="pagecontainer">
            <article className="hometalk">
                <h1 className="head"> Welkom op Home of Superhero's </h1>
                <p className="bodytext">
                Op deze website vind je alle informatie over jouw favoriete superhelden.
                    Heb je je altijd al afgevraagd welke superheld de grootste, snelste, langste, slimste of zwaarste is?
                    Ga meteen door naar het tabblad top 100 waar je kunt ontdekken waar jouw favoriete held staat in de ranking.
                </p>
                <p className="bodytext">Of vind je het leuk om meer te weten te komen over jouw favoriete superheld?
                Dan kun je naar 'Search Your Hero'. Daar kun je de naam van jouw superheld intikken
                    en ontdek je dingen die je nog niet wist. Zoals wie zijn familieleden zijn,
                    wat zijn oorspronkelijke beroep was, of waar hij geboren is.
                </p>
                <p className="bodytext"> Je kunt zoeken op helden van Marvel, DC-comics en Superman Prime One-Million.
                </p>

                <PhotoSlider
                    classnaampje="topplaatje12"
                    quote={null}
                    greatmind="Home of Superhero's"
                />

                <p className="bodytext">
                    En tenslotte kun je je ook nog tijdelijk inschrijven om toegang te krijgen tot de pagina 'Series'
                    Daar kun je zoeken op jouw Marvel superheld en ontdek je in hoeveel series, comics en stories jouw held voorkomt.
                    Wist je bijvoorbeeld dat de Hulk wel 4843 keer voorkomt? Schrijf je snel in om het zelf te proberen.
                </p>
                <p className="bodytext">
                    Maar let op, op deze pagina vind je alleen helden van Marvel. Let op de spelling :).
                </p>

            </article>
          </div>



        </>
    );
}

export default Home;
