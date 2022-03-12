import React from "react";
import { v4 as uuidv4 } from "uuid";
const data = [
  {
    uid: uuidv4(),
    name: "Abu Hurairah",
    email: "abuh4495@gmail.com",
    designation:"Web and Mobile Developer"
},

{
    uid: uuidv4(),
    name: "Awais",
    email: "awais@gmail.com",
    designation:"Mern Stack Developer"
},

  {
    uid: uuidv4(),
    name: "Bassam Tanvir",
    email: "bassamtanvir@gmail.com",
    designation:"Graphic Designer"
  },
];
export default function OutputTable() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-5">List of Employees</h1>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Designation</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          {employees.map((item, index) => {
            return (
              <tr key={index} className="table">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.designation}</td>
                <td>
                  <button className="btn btn-outline-primary">Update</button>
                  <button className="btn btn-outline-danger mx-2">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
