import React from "react";
import './SearchBar.css';


function SearchBar({ setQuery, query}) {
    function onFormSubmit(e){
        e.preventDefault();
        console.log(query);
    }

    return (
        <form className="searchbar"
              onSubmit={onFormSubmit}>
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

