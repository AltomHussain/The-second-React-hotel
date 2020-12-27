import React from "react";

export default function Footer({ footerInfo }) {
  return (
    <div className="footer-container">
      <ul>
        {footerInfo.map((info, index) => {
          return <li key={index}>{info}</li>;
        })}
      </ul>
      <div className="copy-right">&copy; Copyright 2020 Altom</div>
    </div>
  );
}
