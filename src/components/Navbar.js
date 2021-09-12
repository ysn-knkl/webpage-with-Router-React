import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar bg-dark navbar-dark navbar-expand-sm px-5 py-2 border-bottom fixed-top border-3 border-danger">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#">
          <span class="text-danger h2 ">Clarusway</span> <span class="h2">Web Design</span>
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div class="mx-auto"></div>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SERVİCES
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
