import React, {useEffect} from "react";
import axios from "axios";

function SerieInfo({serieName, url}){

    useEffect(() => {
        async function fetchUserData(){
            try{
                const response = await axios.get(`${url}`);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        fetchUserData();
    }, [])

    return(
        <p className="serierecords"> {serieName}</p>
    )
}

export default SerieInfo;
