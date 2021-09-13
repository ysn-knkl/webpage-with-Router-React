import React from "react";
import Html from "../assets/logo_html.png";
import {useHistory } from "react-router-dom";



const Card = () => {
  let history = useHistory();

  return (
    <div className="container ">
      <div className="row my-5 justify-content-between ">
        <div class="card col-4 my-4 p-0 border-none">
        <img src={Html} class="card-img-top w-25 mx-auto pointer" alt="..." onClick={() => {
                    history.push("/html");
                  }}/>
          
          <div class="card-body">
            <h3 class="card-title text-center">HTML5 Markup</h3>
            <p class="card-text p-0">
            HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
            </p>
          </div>
        </div>
        <div class="card col-4 my-4 p-0">
          <img src={Html} class="card-img-top w-25 mx-auto pointer" alt="..."  onClick={() => {
            history.push("/css");
          }}/>
          <div class="card-body">
            <h3 class="card-title text-center">CSS3 Styling</h3>
            <p class="card-text p-0">
            Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages. CSS3 incorporates the CSS2 standard with some changes and improvements. A key change is the division of standard into separate modules, which makes it easier to learn and understand.
            </p>
          </div>
        </div>
        <div class="card col-4 my-4 p-0">
          <img src={Html} class="card-img-top w-25 mx-auto pointer" alt="..."  onClick={() => {
            history.push("/logo");
          }}/>
          <div class="card-body">
            <h3 class="card-title text-center">Graphic Design</h3>
            <p class="card-text p-0">
            Graphic design is defined as “the art and practice of planning and projecting ideas and experiences with visual and textual content.” In other terms, graphic design communicates certain ideas or messages in a visual way. These visuals can be as simple as a business logo, or as complex as page layouts on a website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
