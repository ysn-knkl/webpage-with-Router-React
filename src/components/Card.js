import React from "react";
import Html from "../assets/logo_html.png";


const Card = () => {
  return (
    <div className="container">
      <div className="row my-5 justify-content-between">
        <div class="card col-4 my-4 p-0 border-none">
          <img src={Html} class="card-img-top w-25 mx-auto" alt="..." />
          <div class="card-body">
            <h3 class="card-title text-center">HTML5 Markup</h3>
            <p class="card-text p-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card col-4 my-4 p-0">
          <img src={Html} class="card-img-top w-25 mx-auto" alt="..." />
          <div class="card-body">
            <h3 class="card-title text-center">CSS3 Styling</h3>
            <p class="card-text p-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card col-4 my-4 p-0">
          <img src={Html} class="card-img-top w-25 mx-auto" alt="..." />
          <div class="card-body">
            <h3 class="card-title text-center">Graphic Design</h3>
            <p class="card-text p-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
