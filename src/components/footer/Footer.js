import React from "react";
import { useState } from "react";

export default function Footer() {
  let now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  return (
    <div
      class="container-fluid bg-dark mx-0 d-flex pt-2 flex-column"
      style={{ height: "40px" }}
    >
      <div className="justify-content-center">
        <div class="row">
          <div class="col">
            <p class="text-center text-white mb-0">
              &copy; <span className="fw-bold">{year}</span> All Right reserved.
              <a href="#" class="fw-bold text-decoration-none text-white">
                www.abuhurairah.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
