import React, {useState} from "react";
import Bumper from "../components/bumper/Bumper";
import axios from 'axios';
import './TopTen.css';
import SearchBar from "../components/searchBar/SearchBar";

function Topten() {
const [yourHero, setYourHero] = useState({});
const [searchQuerie, setSearchQuerie] = useState('');

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

    return(
     <>

            <Bumper
                classname="bumper2"
                tekst="Zoek je favoriete superheld"
            />
        <div>

        </div>

            <article className="toptiens">
            <button className="ttbutton"
            onClick={fetchUserData}>
                Klik voor de sterkste Superhelden
            </button>
            </article>
<div>
         Hier moet nog bijkomen:
         1) een sortmethode om alleen de sterkste 10 eruit te vissen. (of sort voor sorteren en filter voor de top tien?)?
         2) doorklikbare naam om naar het overzichtskaartje te gaan.
</div>




         <SearchBar searchHero={setSearchQuerie} />

            </>
    );
}
export default Topten;
