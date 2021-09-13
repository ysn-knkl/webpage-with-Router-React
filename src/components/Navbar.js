import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand fw-bold " href="#">
          <span class="text-danger">Clarusway</span>{" "}
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
            <li class="nav-item "><a class="nav-link" href="#" active>HOME</a></li>
            <li class="nav-item"><a class="nav-link" href="#" >ABOUT</a></li>
            <li class="nav-item"><a class="nav-link" href="#" >SERVİCES</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
