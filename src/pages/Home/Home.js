import React from "react";
import './Home.css';
import Bumper from "../../components/bumper/Bumper";
import SearchHero from "../SearchHero";


function Home() {
    return(
        <>
            <Bumper
                classname="bumper1"
            />
        <div className="pagecontainer">
Dit is de Home Pagina

            <div>


                Op deze website vind je alle informatie over jouw favoriete superhelden.
            </div>

          </div>
            <SearchHero/>


        </>
    );
}

export default Home;
