import React, {useEffect, useState} from "react";
import Bumper from "../../components/bumper/Bumper";
import axios from 'axios';
import './TopTen.css';
import {Link} from "react-router-dom";
import poundsToKilo from "../../components/helpers/poundsToKilo";

function Topten() {
const [yourHero, setYourHero] = useState({});
const [status, setStatus] = useState('');


    useEffect(() => {async function fetchHeroData(){
       try {
           const response = await axios.get
           ('https://akabab.github.io/superhero-api/api/all.json');
           const gefilterdeHelden = response.data.filter((hero) => {
               if (/*hero.biography.publisher === 'Dark Horse Comics' ||*/ hero.biography.publisher === 'Superman Prime One-Million' || hero.biography.publisher === 'Marvel Comics' || hero.biography.publisher === 'DC Comics')
                   if (hero.appearance.height[1] !== '0 cm')
                       if (hero.appearance.height[1] !== '0 kg') // dit filtert een held genaamd 'Dagger' eruit
                           if (hero.appearance.weight[1] !== '0 kg')
                               if (hero.appearance.height[1] !== '62.5 meters') // dit filtert Giganta eruit
                                   if (hero.appearance.height[1] !== '15.2 meters') // dit filtert Utgard-Loki
                                       if (hero.appearance.height[1] !== '366 cm') // dit haalt wolfsbane eruit die véél kleiner is dan 366
                                           if (hero.name !== 'Franklin Storm') // deze kwam te vaak in de top100 en is bovendien niet aansprekend
                                           {
                   return true
               }  else {
                       return false
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

    function TopTenLists(heroList) {
        switch (status) {
            case 'Speed' : return setYourHero(heroList.sort((b, a) => a.powerstats.speed - b.powerstats.speed));
                break;
            case 'Slow': return setYourHero(heroList.sort((a, b) => a.powerstats.speed - b.powerstats.speed));
                break;
            case 'Strong' : return setYourHero(heroList.sort((b, a) => a.powerstats.strength - b.powerstats.strength));
                break;
            case "Weak": return setYourHero(heroList.sort((a, b) => a.powerstats.strength - b.powerstats.strength));
                break;
            case 'Intelligence' : return setYourHero(heroList.sort((b, a) => a.powerstats.intelligence - b.powerstats.intelligence));
                break;
            case 'Stupidity': return setYourHero(heroList.sort((a, b) => a.powerstats.intelligence - b.powerstats.intelligence));
                break;
            case 'Fight' :  return setYourHero(heroList.sort((b, a) => a.powerstats.combat - b.powerstats.combat));
                break;
            case 'FightBad' : return setYourHero(heroList.sort((a, b) => a.powerstats.combat - b.powerstats.combat));
                break;
            case 'Durability' : return setYourHero(heroList.sort((b, a) => a.powerstats.durability - b.powerstats.durability));
                break;
            case 'DurabilityBad' : return setYourHero(heroList.sort((a, b) => a.powerstats.durability - b.powerstats.durability));
                break;
           case 'Tallest' :
               return setYourHero(heroList.sort((b, a) => a.appearance.height[1].replaceAll(" cm", "") - b.appearance.height[1].replaceAll(" cm", "")));
                break;
            case 'Shortest' : return setYourHero(heroList.sort((a, b) => a.appearance.height[1].replaceAll(" cm", "") - b.appearance.height[1].replaceAll(" cm", "")));
                break;
            case 'Heaviest' :
                return setYourHero(heroList.sort((b, a) => a.appearance.weight[0].replaceAll(" lb", "") - b.appearance.weight[0].replaceAll(" lb", "")));
                break;
            case 'Lightest' :
                return setYourHero(heroList.sort((a, b) => a.appearance.weight[0].replaceAll(" lb", "") - b.appearance.weight[0].replaceAll(" lb", "")));
                break;
            case 'Best' :
                return setYourHero(heroList.sort((b, a) => (a.powerstats.speed + a.powerstats.strength + a.powerstats.intelligence + a.powerstats.combat + a.powerstats.durability + a.powerstats.power) - ( b.powerstats.speed + b.powerstats.strength + b.powerstats.intelligence + b.powerstats.combat + b.powerstats.durability + b.powerstats.power)));
                break;
            case 'Worst' :
                return setYourHero(heroList.sort((a, b) => (a.powerstats.speed + a.powerstats.strength + a.powerstats.intelligence + a.powerstats.combat + a.powerstats.durability + a.powerstats.power) - ( b.powerstats.speed + b.powerstats.strength + b.powerstats.intelligence + b.powerstats.combat + b.powerstats.durability + b.powerstats.power)));
        }
    }



    return(
     <>

            <Bumper
                classname="bumper1"
                tekst="Zoek jouw favoriete top 100"/>
         <Bumper
             classname="bumper4"
         />
         <span className="knoppen-container">

            <button className="ttbutton"
            onClick={() => setStatus("Strong")}>
               Sterkste Superhelden
            </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Weak")}>
                Slapste Superhelden
             </button>

             <button className="ttbutton"
                  onClick={() => setStatus("Speed")}>
                 Snelste Superhelden
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Slow")}>
             Traagste Superhelden
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Intelligence")}>
                Slimste Superhelden
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Stupidity")}>
                 Domste Superhelden
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Fight")}>
                Beste vechters
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("FightBad")}>
                 Slechtste vechters
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Durability")}>
               Beste uithoudingsvermogen
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("DurabilityBad")}>
                Slechtste uithoudingsvermogen
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Tallest")}>
               Langste Helden
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Shortest")}>
                Kleinste Helden
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Heaviest")}>
                 Zwaarste Helden
             </button>

             <button className="ttbutton"
                     onClick={() => setStatus("Lightest")}>
                 Lichtste Helden
             </button>
             <button className="ttbutton"
                     onClick={() => setStatus("Best")}>
                 Beste overall
             </button>
              <button className="ttbutton"
                 onClick={() => setStatus("Worst")}>
                 Slechtste overall
             </button>

  </span>
         <Bumper
             classname="bumper4"
         />
         <div className="hetrestje">
             {Object.keys(yourHero).length > 0 &&
                 <>
                     <div className="posts">
                     <ol>
                             {yourHero.slice(0,100).map((posts) => {
                                 return <li className="lijsten">
                                     <Link to={`/findyourhero/${posts.id}`}>
                                         <h3> {posts.name} </h3>
                                         <img src={posts.images.sm} alt="muckshot" className="heldplaatje"/>
                                         <p className="vaardigheden">
                                             {status === "Speed" && "Snelheid: " + posts.powerstats.speed }
                                             {status === "Slow" && "Sneldheid: " + posts.powerstats.speed}
                                             {status === "Strong" && "Kracht: " + posts.powerstats.strength}
                                             {status === "Weak" && "Kracht: " + posts.powerstats.strength}
                                             {status === "Intelligence" && "Intelligentie: " + posts.powerstats.intelligence}
                                             {status === "Stupidity" && "Intelligentie: " + posts.powerstats.intelligence}
                                             {status === "Fight" && "Vechtvaardigheid: " + posts.powerstats.combat}
                                             {status === "FightBad" && "Vechtvaardigheid: " + posts.powerstats.combat}
                                             {status === "Durability" && "Uithoudingsvermogen: " + posts.powerstats.durability}
                                             {status === "DurabilityBad" && "Uithoudingsvermogen: " + posts.powerstats.durability}
                                             {status === "Tallest" && "Lengte: " + (posts.appearance.height[1])}
                                             {status === "Shortest" && "Lengte: " + posts.appearance.height[1]}
                                             {status === "Heaviest" && "Gewicht in kilo: " + (poundsToKilo(posts.appearance.weight[0]))}
                                             {status === "Lightest" && "Gewicht in kilo: " + (poundsToKilo(posts.appearance.weight[0]))}
                                             {status === "Best" && "Totale score: " + (posts.powerstats.speed + posts.powerstats.strength + posts.powerstats.intelligence + posts.powerstats.combat + posts.powerstats.durability + posts.powerstats.power)}
                                             {status === "Worst" && "Totale score: " + (posts.powerstats.speed + posts.powerstats.strength + posts.powerstats.intelligence + posts.powerstats.combat + posts.powerstats.durability + posts.powerstats.power)}
                                         </p>
                                     </Link>
                                 </li>
                             })}
                             })}
                         </ol>
                     </div>

                 </>
             }
         </div>








            </>
    );
}
export default Topten;
