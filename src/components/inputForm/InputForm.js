import react, { useState } from "react";
import React from "react";
import {data} from "../outputTable/OutputTable";

export default function InputForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [employees, setEmployees] = useState(data);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateUid, setUpdateUid] = useState(0);
  const onChangeNameHandler = (e) => {
    console.log("event---", e.target.value);
    setUserName(e.target.value);
  };

  return (
    <div className="d-flex">
      <div className="col-md-5 shadow p-3 mb-5 bg-body rounded d-flex align-items-center mx-3">
        <h1
          style={{
            color: "#1d3557",
          }}
          className="display-5"
        >
          Welcome! to Tect Cat Solutions
        </h1>
      </div>

      <div className="col-md-5 container-fluid w-50 d-flex flex-column ">
        <div class="row mb-3">
          <div class="col-8">
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={userName}
              type="text"
              class="form-control"
              id="userName"
              placeholder="User name"
              aria-label="User name"
            ></input>
          </div>

          <div className="col-4">
            <input
              type="text"
              class="form-control"
              id="designation"
              placeholder="Designation"
            ></input>
          </div>
        </div>

        <div class="mb-3 row">
          <div class="">
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div class=" row">
          <div class="">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <div class=" row mb-3"></div>
        <div className="row">
          <div class="d-grid gap-1 d-md-flex justify-content-md-end">
            <button class="btn btn-outline-primary me-md-1" type="button">
              Submit
            </button>
            <button class="btn btn-outline-danger" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
