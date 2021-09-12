import React from "react";

const Subscribe = () => {
  return (
    <div className="container-fluid bg-dark text-white px-5 mt-3">
      <div className="d-flex  justify-content-between">
        <div className="fw-bold my-3 justify-content-start">
          Subscribe To Our Newsletter
        </div>
        <div className="my-3">
          <form className="row row-cols-md-2">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div>
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
