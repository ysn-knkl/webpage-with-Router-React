import React from "react";
import NavBar from "../components/Navbar";
import Subscribe from "../components/Subscribe";

const About = () => {
    return (
        <>
        <NavBar />
        <Subscribe />
        <div className="container my-3">
            <div className="row justify-content-between">
                <div className="col-7 ">
                    <div>
                        <h4 className="font-weight-bold"> About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          reiciendis quisquam dolore expedita animi harum est quia suscipit
          delectus, recusandae earum possimus at cumque repellendus. Consectetur
          officia aliquid temporibus modi doloremque non dolor, voluptas atque
          labore vel quia? Dolore obcaecati aliquam animi odio consequuntur ut.</p>
                        <p className="bg-dark px-3 text-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          reiciendis quisquam dolore expedita animi harum est quia suscipit
          delectus, recusandae earum possimus at cumque repellendus. Consectetur
          officia aliquid temporibus modi doloremque non dolor, voluptas atque
          labore vel quia? Dolore obcaecati aliquam animi odio consequuntur ut. Consectetur
          officia aliquid temporibus modi doloremque non dolor, voluptas atque
          labore vel quia? Dolore obcaecati aliquam animi odio consequuntur ut.</p>
                    </div>
                </div>
                <div className="col-4 bg-dark text-light align-self-start">
                    <h4 className="py-4 font-weight-bold">What We Do</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          reiciendis quisquam dolore expedita animi harum est quia suscipit
          delectus, recusandae earum possimus at cumque repellendus. Consectetur
          officia aliquid temporibus modi doloremque non dolor, voluptas atque
          labore vel quia?</p>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default About;
