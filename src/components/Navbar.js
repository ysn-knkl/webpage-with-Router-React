import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  return (
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbarZ">
      <div class="container">
        <a class="navbar-brand fw-bold pointer" onClick={() => {
            history.push("/");
          }}>
          <span class="text-danger">Ysn-Knkl</span>{" "}
          <span >Web Design</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item "><NavLink class="navLink" exact to="/" >HOME</NavLink></li>
            <li class="nav-item"><NavLink class="navLink" to="/about"  >ABOUT</NavLink></li>
            <li class="nav-item"><NavLink class="navLink" to="/services" >SERVİCES</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
