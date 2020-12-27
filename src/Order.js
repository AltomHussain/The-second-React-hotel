import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
export default function Order({ orderType }) {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li className="order-list">
      <h3>{orderType}</h3> : <p>{orders}</p>{" "}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
}
