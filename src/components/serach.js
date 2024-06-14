import { useState } from "react";

const Search = ({ isOpen, searchOpen }) => {


    return (

        <div className={`search-wrap ${searchOpen ? `active` : ''}`}>
            <form className="search-form">
                <input className="search-input" type="search" name="search" id="search-query" placeholder="Search..." autoComplete="false"/>
                <span className="close-search toggle-search">
                    <i className="fas fa-times" onClick={isOpen}></i>
                </span>
            </form>
        </div>

    )
};

export default Search;