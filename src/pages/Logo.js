import React from "react";
import Subscribe from "../components/Subscribe";
import js from "../assets/logo_js.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavLink, useHistory } from "react-router-dom";

const Logo = () => {
    let history = useHistory();

    return (
        <div className="container-fluid">
        <Navbar />
        <Subscribe />
        <div className="container my-3">
          <div className="row">
            <img src={js} class="w-25 mx-auto" alt="..." onClick={() => {
            history.push("/logo");
          }} />
          </div>
        </div>
        <div>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            reiciendis quisquam dolore expedita animi harum est quia suscipit
            delectus, recusandae earum possimus at cumque repellendus. Consectetur
            officia aliquid temporibus modi doloremque non dolor, voluptas atque
            labore vel quia? Dolore obcaecati aliquam animi odio consequuntur ut.
            Soluta maiores facilis animi eveniet tempore laboriosam ipsam libero
            iste molestias exercitationem nobis, iure cum asperiores ipsa placeat
            quo ut quaerat odio, perferendis accusantium neque consectetur ducimus
            earum. Aliquam nobis placeat sunt veniam excepturi adipisci, vel
            tenetur, eius qui esse officia veritatis nemo illum aperiam. Eos
            molestias nostrum adipisci vero blanditiis, corporis quam maxime ipsa
            laborum cupiditate, amet sapiente! Ut dolores officia exercitationem
            fuga, cupiditate, ex deserunt distinctio expedita nobis tenetur error
            ad blanditiis sed maxime eius veritatis voluptate? Voluptate
            voluptates quaerat, modi dolorum dolores, sapiente totam dignissimos
            accusantium quos cum molestiae non officiis eum, ipsa ratione ab
            incidunt suscipit!
          </p>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            reiciendis quisquam dolore expedita animi harum est quia suscipit
            delectus, recusandae earum possimus at cumque repellendus. Consectetur
            officia aliquid temporibus modi doloremque non dolor, voluptas atque
            labore vel quia? Dolore obcaecati aliquam animi odio consequuntur ut.
            Soluta maiores facilis animi eveniet tempore laboriosam ipsam libero
            iste molestias exercitationem nobis, iure cum asperiores ipsa placeat
            quo ut quaerat odio, perferendis accusantium neque consectetur ducimus
            earum. Aliquam nobis placeat sunt veniam excepturi adipisci, vel
            tenetur, eius qui esse officia veritatis nemo illum aperiam. Eos
            molestias nostrum adipisci vero blanditiis, corporis quam maxime ipsa
            laborum cupiditate, amet sapiente! Ut dolores officia exercitationem
            fuga, cupiditate, ex deserunt distinctio expedita nobis tenetur error
            ad blanditiis sed maxime eius veritatis voluptate? Voluptate
            voluptates quaerat, modi dolorum dolores, sapiente totam dignissimos
            accusantium quos cum molestiae non officiis eum, ipsa ratione ab
            incidunt suscipit!
          </p>
        </div>
        <Footer />
      </div>
    )
}

export default Logo
