import React from "react";
import NavBar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Card from "../components/Card";

const Services = () => {
  return (
    <>
      <NavBar />
      <Subscribe />
      <div className="container my-3">
        <div className="row justify-content-between">
          <div className="col-7 ">
            <div>
              <h4 className="font-weight-bold text-dark my-3">Services</h4>
              <div className="container border border-dark py-3 services-bg mb-1">
                <h5 className="font-weight-bold text-dark  py-3">
                  Website Design
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias reiciendis quisquam dolore expedita animi harum est
                  quia suscipit delectus
                </p>
                <p>Pricing: $1,000 - $3,000</p>
              </div>
              <div className="container border border-dark py-3 services-bg mb-1">
                <h5 className="font-weight-bold text-dark py-3">
                  Website Maintenance
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias reiciendis quisquam dolore expedita animi harum est
                  quia suscipit delectus
                </p>
                <p>Pricing: $1,000 - $3,000</p>
              </div>
              <div className="container border border-dark py-3 services-bg">
                <h5 className="font-weight-bold text-dark py-3">
                  Website Hoisting
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias reiciendis quisquam dolore expedita animi harum est
                  quia suscipit delectus
                </p>
                <p>Pricing: $1,000 - $3,000</p>
              </div>
            </div>
          </div>
          <div className="col-4 bg-dark text-light align-self-start my-2">
            <form>
              <h4 className="font-weight-bold my-4">Get A Quote</h4>
              <div class="form-row">
                <div class="form-group col-11">
                  <label for="inputName">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="form-group col-11">
                <label for="inputAddress">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Email Adress"
                />
              </div>
              <div class="form-group col-11">
                <label for="inputMessage">Message</label>
                <textarea
                  aria-label="With textarea"
                  type="text"
                  class="form-control"
                  id="inputMessage"
                  placeholder="Message"
                />
              </div>
              <button type="submit" class="btn bg-danger btn-md my-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
