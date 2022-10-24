import React, {useEffect, useState} from "react";
import Bumper from "../components/bumper/Bumper";
import axios from 'axios';
import './TopTen.css';
import SearchBar from "../components/searchBar/SearchBar";
import {Link} from "react-router-dom";


function Topten() {
const [yourHero, setYourHero] = useState({});
const [searchQuerie, setSearchQuerie] = useState('');
const [status, setStatus] = useState('');

   useEffect(() => {async function fetchHeroData(){

       try {
           const response = await axios.get
           ('https://akabab.github.io/superhero-api/api/all.json');
           const gefilterdeHelden = response.data.filter((hero) => {
               if (hero.biography.publisher === 'DC Comics' || hero.biography.publisher === 'Marvel Comics'){
                   return true
               }
           })
           console.log(status)
           console.log(response.data)

           TopTenLists(gefilterdeHelden);
       } catch(e){
           console.error(e);
       }

   }  fetchHeroData();
       }, [status]) ;

function TopTenLists(heroList){
    if(status === "Speed"){
        return setYourHero(heroList.sort((b,a) => a.powerstats.speed - b.powerstats.speed));
    } else if (status === "Slow"){
       return setYourHero(heroList.sort((a,b) => a.powerstats.speed - b.powerstats.speed));
    } else if (status === "Strong"){
        return setYourHero(heroList.sort((b,a) => a.powerstats.power - b.powerstats.power));
    } else if (status === "Weak"){
        return setYourHero(heroList.sort((a,b) => a.powerstats.power - b.powerstats.power));
    } else if (status === "Intelligence"){
        return setYourHero(heroList.sort((b,a) => a.powerstats.intelligence - b.powerstats.intelligence));
    } else if (status === "Stupidity"){
        return setYourHero(heroList.sort((a,b) => a.powerstats.intelligence - b.powerstats.intelligence));
    } else if (status === "Fight"){
        return setYourHero(heroList.sort((b,a) => a.powerstats.combat - b.powerstats.combat));
    } else if (status === "FightBad"){
        return setYourHero(heroList.sort((a,b) => a.powerstats.combat - b.powerstats.combat));
    } else if (status === "Durability"){
        return setYourHero(heroList.sort((b,a) => a.powerstats.durability - b.powerstats.durability));
    } else if (status === "DurabilityBad"){
        return setYourHero(heroList.sort((a,b) => a.powerstats.durability - b.powerstats.durability));
    }  else if (status === "Tallest"){
        return
        let array = [];
        setYourHero(heroList.map((sortTallest) => array.push));
        // je maakt een let met array. lege array let array = []; Dan de map methode. Op de plek van de console log -> array.push(hier sort tallest.appearance.slice (niet de sort))

/*
        setYourHero(heroList.map((sortTallest) => console.log(sortTallest.appearance.height.slice(1,2).sort((a,b) => a - b ))));
*/

    } else if (status === "Shortest") {
        return setYourHero(heroList.sort((a, b) => a.appearance.height[1] - b.appearance.height[1]));
    } else if (status === "Heaviest"){
        return setYourHero(heroList.sort((b,a) => a.appearance.weight[1] - b.appearance.weight[1]));
    } else if (status === "Lightest") {
        return setYourHero(heroList.sort((a, b) => a.appearance.weight[1] - b.appearance.weight[1]));
    }

}



    return(
     <>

            <Bumper
                classname="bumper3"
                tekst="Zoek je favoriete superheld"
            />

         <span className="knoppen-container">

            <article className="toptiens">
            <button className="ttbutton"
            onClick={() => setStatus("Strong")}>
               STERKSTE Superhelden
            </button>
            </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Weak")}>
                 SLAPSTE Superhelden
             </button>
         </article>

             <article className="toptiens">
             <button className="ttbutton"
                  onClick={() => setStatus("Speed")}>
                 SNELSTE Superhelden
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Slow")}>
             LANGZAAMSTE Superhelden
             </button>
         </article>


         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Intelligence")}>
                 Slimste Superhelden
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Stupidity")}>
                 Domste Superhelden
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Fight")}>
                BESTE VECHTERS
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("FightBad")}>
                 SLECHTSTE vechters
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Durability")}>
                 Beste uithoudingsvermogen
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("DurabilityBad")}>
                SLECHTSTE uithoudingsvermogen
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Tallest")}>
                 Klik voor de LANGSTE Helden
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Shortest")}>
                 Klik voor de KLEINSTE Helden
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Heaviest")}>
                 Klik voor de Zwaarste Helden
             </button>
         </article>

         <article className="toptiens">
             <button className="ttbutton"
                     onClick={() => setStatus("Lightest")}>
                 Klik voor de Lichtste Helden
             </button>
         </article>
  </span>



         {Object.keys(yourHero).length > 0 &&
             <>
                 <div className="posts">
                     <h1>Hier is jouw Top Tien: {yourHero.length}</h1>
                     <ol>
                         {yourHero.slice(0,10).map((posts) => {
                             return <li className="lijsten">
                                 <Link to={`/findyourhero/${posts.id}`}>
                                 <p> naam: {posts.name} </p>
                                 {/*<p> foto: {posts.images.xs}</p>*/}
{/*
                                 //hier een link omheen zetten met useParams, die informatie van held.id weer gebruikt als api call
*/}
                                 {status === "Speed" && "Snelheid: " + posts.powerstats.speed}
                                 {status === "Slow" && "Sneldheid: " + posts.powerstats.speed}
                                 {status === "Strong" && "Kracht: " + posts.powerstats.power}
                                 {status === "Weak" && "Kracht: " + posts.powerstats.power}
                                 {status === "Intelligence" && "Intelligentie: " + posts.powerstats.intelligence}
                                 {status === "Stupidity" && "Intelligentie: " + posts.powerstats.intelligence}
                                 {status === "Fight" && "Vechtvaardigheid: " + posts.powerstats.combat}
                                 {status === "FightBad" && "Vechtvaardigheid: " + posts.powerstats.combat}
                                 {status === "Durability" && "Uithoudingsvermogen: " + posts.powerstats.durability}
                                 {status === "DurabilityBad" && "Uithoudingsvermogen: " + posts.powerstats.durability}
                                 {status === "Tallest" && "Lengte: " + posts.appearance.height[1]}
                                 {status === "Shortest" && "Lengte: " + posts.appearance.height[1]}
                                 {status === "Heaviest" && "Gewicht: " + posts.appearance.weight[1]}
                                 {status === "Lightest" && "Gewicht: " + posts.appearance.weight[1]}
                             </Link>
                             </li>
                         })}
                         })}
                     </ol>
                 </div>

               {/*  {Object.keys(yourHero).length > 0 &&
                     <>
                         <div className="posts">
                             <h1>aantal objecten uit de call is: {yourHero.length}</h1>
                             <ol>
                                 {yourHero.sort((b,a) => a.powerstats.speed - b.powerstats.speed).slice(0,10).map((posts) => {
                                     return <li>
                                         <p> naam: {posts.name} </p>
                                         //hier een link omheen zetten met useParams, die informatie van held.id weer gebruikt als api call
                                         Speed: {posts.powerstats.speed}
                                     </li>
                                 })}
                                 })}
                             </ol>
                         </div>*/}

             </>
         }


         <SearchBar searchHero={setSearchQuerie} />

            </>
    );
}
export default Topten;
