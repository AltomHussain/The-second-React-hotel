import React, { useState } from "react";
import moment from "moment";
export default function SearchResults({ results }) {
  const [isSelected, setIsSelected] = useState([]);
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
          key={data}
          onClick={() => handleClick(index)}
          className={isSelected.includes(index) ? "selected" : null}
        >
          <th scope="row">{index}</th>
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
        <thead>{tableHead()}</thead>
        <tbody>{tableData(results)}</tbody>
      </table>
    </div>
  );
}
