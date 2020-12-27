import React from "react";

export default function SearchButton({ searchInput, handleSearchInput }) {
  return (
    <div className="search-row">
      <input
        type="text"
        id="customerName"
        className="form-control"
        placeholder="Customer name"
        name="input-name"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <button className="btn search-btn">Search</button>
    </div>
  );
}
