import { Alert } from "bootstrap";
import React, { useState } from "react";
import { v4 } from "uuid";
import { data } from "../../constants/Constants";

export default function InputForm() {
  const [employees, setEmployees] = useState(data);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateUid, setUpdateUid] = useState(0);
  const onSubmitHandler = () => {
    let employee = {
      uid: v4(),
      name: userName,
      email: email,
      designation: designation,
      password: password,
    };
    if (!userName || !email || !designation || !password) {
      alert("All inputs are REQUIRED!");
    } else {
      setUserName("");
      setDesignation("");
      setEmail("");
      setPassword("");
      setEmployees([...employees, employee]);
    }
  };
  const onResetHandler = () => {
    setUserName("");
    setDesignation("");
    setEmail("");
    setPassword("");
  };
  const onUpdateHandler = (item) => {
    setIsUpdate(true);
    setUserName(item.name);
    setDesignation(item.designation);
    setEmail(item.email);
    setPassword(item.password);
    setUpdateUid(item.uid);
  };
  const onDeleteHandler = (uid) => {
    let newEmployees = employees.filter((employee) => employee.uid !== uid);
    setEmployees(newEmployees);
  };
  const onCtaUpdate = () => {
    let employee = {
      uid: v4(),
      name: userName,
      email: email,
      designation: designation,
      password: password,
    };

    let updatedEmployees = employees.map((item) => {
      if (item.uid === updateUid) {
        return employee;
      } else {
        return item;
      }
    });
    setEmployees(updatedEmployees);
    setUserName("");
    setDesignation("");
    setEmail("");
    setPassword("");
    isUpdate(false);
  };
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Employee Data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row mb-3">
                <div className="col-8">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    className="form-control"
                    id="userName"
                    placeholder="User name"
                    aria-label="User name"
                  ></input>
                </div>

                <div className="col-4">
                  <input
                    type="text"
                    value={designation}
                    onChange={(e) => {
                      setDesignation(e.target.value);
                    }}
                    className="form-control"
                    id="designation"
                    placeholder="Designation"
                  ></input>
                </div>
              </div>

              <div className="mb-3 row">
                <div className="">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div className=" row">
                <div className="">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <div className=" row mb-3"></div>
              <div className="row"></div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={onResetHandler}
              >
                Reset
              </button>
              {isUpdate ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => onCtaUpdate()}
                >
                  Update
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={onSubmitHandler}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1 className="display-5">List of Employees</h1>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Designation</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((item, index) => {
                return (
                  <tr scope="row">
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.designation}</td>
                    <td>
                      <button
                        className="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => onUpdateHandler(item)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-outline-danger mx-2"
                        onClick={() => onDeleteHandler(item.uid)}
                      >
                        Delete
                      </button>
                      <button className="btn btn-outline-primary px-2">
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
