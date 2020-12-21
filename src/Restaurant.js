import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  // const [orders, setOrders] = useState(0)

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
