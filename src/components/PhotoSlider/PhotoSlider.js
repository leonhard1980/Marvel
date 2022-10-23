import React from 'react';
import './PhotoSlider.css';


function PhotoSlider({ quote, greatmind, classnaampje }){
    return(
        <div className={classnaampje}>
            <h1>{quote}</h1>
            <h3> -- Quote: {greatmind} -- </h3>
        </div>
    );
}

export default PhotoSlider;
