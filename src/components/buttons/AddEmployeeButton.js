import React from "react";

export default function AddEmployeeButton() {
  return (
    <button
      className="btn btn-primary mt-3 w-25"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Add Employees
    </button>
  );
}
