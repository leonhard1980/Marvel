import React, {useState} from "react";
import './SearchBarSeries.css';

function SearchBarSeries({searchHero}) {
    const [query, setQuery] = useState('');

    function onFormSubmit(e){
        e.preventDefault();
        searchHero(query);
    }

    return(
        <form className="searchbarseries"
              onSubmit={onFormSubmit}>
            <input className="zoekveld"
                   type="text"
                   name="search"
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   placeholder="Zoek jouw held"/>
            <div> zoek Marvel-helden zoals: Hulk, Wong, Black Panther of Iron Man.</div>

            <button className="button"
                    type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchBarSeries
