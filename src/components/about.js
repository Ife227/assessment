import React from "react";
import logo from "../images/jhblogo25th.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="m-5 bg-yellow-200 rounded-3xl h-full text-center">
        <img
          src={logo}
          alt=""
          className="m-5 rounded-full cursor-pointer"
          onClick={homeHandler}
        />
        <div className="p-5">
          <p className="text-6xl text-amber-900 font-Oswald p-5 text-left">
            A B O U T
          </p>
        </div>
        <p className="px-5 py-5 pb-60 text-2xl font-Oswald">
          Jesus House Baltimore is an institution that welcomes people from all
          walks of life and challenges them to maximize their God-given
          potentials.
          <br />
          This website is meant to serve as a portal for registered users to
          test their knowledge in a wide array of subjects, such as basic and
          complex mathematics, American history, and language skills.
        </p>
      </div>
    </div>
  );
}

export default About;
