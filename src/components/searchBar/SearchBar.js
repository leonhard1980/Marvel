import React, {useState} from "react";
import './SearchBar.css';


function SearchBar(searchHero) {
    const [query, setQuery] = useState('');
    function onFormSubmit(e){
        e.preventDefault();
        searchHero(query);
    }

    return (
        <form className="searchbar" onSubmit={onFormSubmit}>
      <input className="zoekveld"
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek een held"
      />

            <button className="button"
                        type="submit">
                zoek nu!
            </button>
        </form>
    );
};


export default SearchBar;

