import React from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  return (
    <div className="d-flex justify-content-between flex-columnbg-dark text-white p-3">
      <a href="" className="p-3">
        <i className="bi bi-code-slash fs-4 me-4">
          <span className="fs-4"> Task Schedular bei Nour</span>
        </i>
      </a>
      <hr className="text-secondary mt-2" />
      <ul className="nav nav-pills flex-column mt-2">
        <li className="nav-item p-3">
          <a href="">
            <i className="bi bi-code-speedometer2 fs-5 me-3">
              <span>
                {" "}
                <strong className="fs-4">Dashboard</strong>
              </span>
            </i>
          </a>
        </li>
        <li className="nav-item p-3">
          <a href="">
            <i className="bi bi-people fs-5 me-3">
              <span className="fs-4">
                {" "}
                <strong>Users</strong>
              </span>
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
