import React, { useState, useEffect }from "react";
import axios from "axios";

function WhoNeverMet() {

    const apiKeyPrivate = "ee113a5aa21a594a97eeda96adc86766a7b56358";
    const apiKeyPublic = "8a621d214f6703c92354d117a0cdb893";
    const [yourHero, setHero] = useState();


    useEffect(() => {async function fetchYourHero(){
                try{
            const response = await axios.get
            (`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8a621d214f6703c92354d117a0cdb893`);
            console.log(response.data);
            setHero(response.data);
        } catch(e) {
            console.error(e)
        }
    }
    fetchYourHero()
}, []);


    return(
        <>
        <div>
            Welke Helden zijn elkaar nooit tegengekomen?
        </div>


        </>
    );
}

export default WhoNeverMet;
