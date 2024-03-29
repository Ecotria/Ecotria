import React from 'react';
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';

function SearchBar(props) {
    return (
        <React.Fragment>
            <SearchIcon/>
            <input className="search-input" placeholder="Search"></input>
        </React.Fragment> 
    );
}

export default SearchBar;