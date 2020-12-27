import React, { useState, useEffect } from "react";

export default function CustomerProfile({ id }) {
  const [showCustomerInfo, setShowCustomerInfo] = useState("");
  console.log(id);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        setShowCustomerInfo(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div className="customer-profile">
      <h3> {`Customer ${id} Profile🧑 👇`}</h3>
      <br />
      <p>First name:{showCustomerInfo.firstName}</p>
      <p>Surname:{showCustomerInfo.surname}</p>
      <p>Email:{showCustomerInfo.email}</p>
      <p>Phone:{showCustomerInfo.phoneNumber}</p>
      <p>Vip: {showCustomerInfo.vip ? "Yes" : "No"}</p>
    </div>
  );
}
