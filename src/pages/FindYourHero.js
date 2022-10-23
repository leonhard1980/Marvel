import React, {useState} from "react";
import SearchBar, {query} from "../components/searchBar/SearchBar";
import Bumper from "../components/bumper/Bumper";
import axios from "axios";
import PhotoSlider from "../components/PhotoSlider/PhotoSlider";



export function FindYourHero() {

    const [yourHero, setYourHero] = useState({});
    const searchedHero = yourHero

    async function fetchUserData(){
        try {
            const response = await axios.get
            ('https://akabab.github.io/superhero-api/api/all.json');
            console.log(response.data);
            setYourHero(response.data);
        } catch(e){
            console.error(e);
        }
    }


    return (

        <>
        <Bumper
            classname="bumper1"
        tekst="Zoek je favoriete held"/>

            <SearchBar/>


        <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>






            <PhotoSlider
                classnaampje="topplaatje1"
            />

            <div> bla di bla di bla</div>    <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>
            <div> bla di bla di bla</div>    <div> bla di bla di bla</div>

            <PhotoSlider
                classnaampje="topplaatje11"
                quote={null}
                greatmind="We love to make you Healthy"
            />


        </>
    );
};

export default FindYourHero;
