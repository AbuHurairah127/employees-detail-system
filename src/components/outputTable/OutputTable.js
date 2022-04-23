import React from "react";
//Importing Libraries
//Importing Constant Data
import { data } from "../../constants/Constants";

export default function OutputTable(props) {
  return (
    <div>
      <tr>
        <td>{props.No}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.designation}</td>
        <td>{props.actions}</td>
      </tr>
    </div>
  );
}
