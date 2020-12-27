import React from "react";

export default function RestaurantButton({ orderOne }) {
  return (
    <button className="btn add-btn" onClick={orderOne}>
      Add
    </button>
  );
}
