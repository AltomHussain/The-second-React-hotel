import React, { useEffect, useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile ";
export default function SearchResults({ results }) {
  const [isSelected, setIsSelected] = useState([]);
  const [showProfileId, setShowProfileId] = useState("");

  function showCustomerProfile(id) {
    setShowProfileId(id);
  }

  function handleClick(id) {
    if (!isSelected.includes(id)) {
      setIsSelected([...isSelected, id]);
    } else {
      setIsSelected(isSelected.filter(p => p !== id));
    }
  }
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

  //console.log(moment(a).diff(moment(b)))
  //table data function
  function tableData(results) {
    return results.map((data, index) => {
      return (
        <tr
          key={index}
          onClick={() => handleClick(index)}
          className={isSelected.includes(index) ? "selected" : null}
        >
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
          <td>
            <button onClick={() => showCustomerProfile(data.id)}>
              Show profile
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className="table">
        <thead>{tableHead()}</thead>
        <tbody>{tableData(results)}</tbody>
      </table>
      {showProfileId ? <CustomerProfile id={showProfileId} /> : null}
    </div>
  );
}
