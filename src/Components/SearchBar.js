import React from "react";

const SearchBar = (props) => {
    return (
        <div>
        <input
            type="text"
            value={props.searchValue}
            onChange={props.onSearchChange}
        />
        <button onClick={props.onSearchClick}>Rechercher</button>
        </div>
    );
}

export default SearchBar;



