import React from "react";
import moment from "moment";
export default function SearchResults({ results }) {
  //Table head function
  function tableHead() {
    const topRow = [
      "Id",
      "Title",
      "FirstName",
      "Surname",
      "Email",
      "Room Id",
      "Check in date",
      "Check out date",
      "number of nights"
    ];
    return topRow.map((header, index) => {
      return <th key={index}>{header}</th>;
    });
  }
  let a = "30";
  let b = "33";

  //console.log(moment(a).diff(moment(b)))
  //table data function
  function tableData(results) {
    return results.map((data, index) => {
      return (
        <tr key={index}>
          <th scope="row">{data.id}</th>
          <td>{data.title} </td>
          <td>{data.firstName} </td>
          <td>{data.surname} </td>
          <td>{data.email} </td>
          <td>{data.roomId} </td>
          <td>{data.checkInDate} </td>
          <td>{data.checkOutDate} </td>
          <td>
            {moment(data.checkOutDate).diff(moment(data.checkInDate), "days")}{" "}
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>{tableHead()}</tr>
        </thead>
        <tbody>{tableData(results)}</tbody>
      </table>
    </div>
  );
}
