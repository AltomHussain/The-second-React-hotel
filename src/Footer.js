import React from "react";

export default function Footer({ footerInfo }) {
  return (
    <div>
      <ul>
        {footerInfo.map((info, index) => {
          return <li key={index}>{info}</li>;
        })}
      </ul>
    </div>
  );
}
