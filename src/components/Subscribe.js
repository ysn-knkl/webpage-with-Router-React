import React from "react";

const Subscribe = () => {
  return (
    <>
    <div class="border-top border-danger w-100 z-index-1"></div>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand fw-bold " href="#">
          <h4>Subscribe To Our NewsLetter</h4>
        </a>
        
        <form className="row">
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email..."
                />
              </div>
              <div className="col-4 px-1">
                <button className="btn bg-danger btn-md">Subscript</button>
              </div>
            </form>
      </div>
    </nav>
    </>
  );
};

export default Subscribe;
