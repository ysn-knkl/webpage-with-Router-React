import React, {useState, useEffect} from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const [navbarHeight, setNavbarHeight] = useState(false);
  


  useEffect(() => {
    const myCollapse = document.querySelector('.navbarZ');
    if(navbarHeight){
      myCollapse.style.height = "16rem";
    }else{
      myCollapse.style.height = "7rem";
    }

  }, [navbarHeight])
  
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
           aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>setNavbarHeight(!navbarHeight)}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item "><NavLink class="navLink active" exact to="/" >HOME</NavLink></li>
            <li class="nav-item"><NavLink class="navLink" to="/about"  >ABOUT</NavLink></li>
            <li class="nav-item"><NavLink class="navLink" to="/services" >SERVİCES</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
