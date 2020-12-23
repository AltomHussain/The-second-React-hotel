import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  // https://cyf-react.glitch.me
  useEffect(() => {
    //the original url
    //fetch("https://cyf-react.glitch.me")
    //delay url
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setLoading(true);
        setBookings(data);
      });
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredInput = bookings.filter(
      value => value.firstName === searchVal || value.surname === searchVal
    );
    setBookings(filteredInput);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <SearchResults results={bookings} />
        ) : (
          <p> loading data please wait...</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
