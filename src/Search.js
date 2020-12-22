import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = e => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>

            <SearchButton
              searchInput={searchInput}
              handleSearchInput={handleSearchInput}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
