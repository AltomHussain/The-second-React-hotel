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
    <div>
      {`Customer ${id} profile`}
      <p>{showCustomerInfo.firstName}</p>
    </div>
  );
}
