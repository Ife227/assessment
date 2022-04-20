import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/jhblogo25th.png";

function GridArray() {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };
  const signupHandler = () => {
    navigate("/signup");
  };
  const aboutHandler = () => {
    navigate("/about");
  };
  const contactHandler = () => {
    navigate("/contact");
  };
  const testHandler = () => {
      navigate("/quiz")
  }

  return (
    <div className="text-center p-5">
      <div className="grid grid-cols-2 pb-16">
        <div>
          <img src={logo} alt="" className="w-96 mt-24 blur-none" />
        </div>
        <div className="py-1">
          <div className="text-amber-700 text-right">
            <button
              onClick={aboutHandler}
              className="text-lg font-semibold pt-1 px-2 cursor-pointer"
            >
              about
            </button>
            |
            <button
              onClick={contactHandler}
              className="text-lg font-semibold px-2 cursor-pointer"
            >
              contact us
            </button>
          </div>
          <div>
            <p className="text-6xl text-amber-900 font-Oswald text-right mt-56 px-5 pb-2">
              W E L C O M E
            </p>
            <div className="text-right">
              <button
                onClick={signupHandler}
                className="text-lg text-amber-700 px-2 font-semibold bg-yellow-200 rounded-3xl cursor-pointer"
              >
                Sign Up
              </button>
              |
              <button
                onClick={loginHandler}
                className="text-lg text-amber-700 px-2 font-semibold bg-yellow-200 rounded-3xl cursor-pointer"
              >
                Sign In
              </button>
            </div>
            <div className="text-right">
              <button 
              onClick={testHandler}
              className="text-lg text-amber-700 px-2 font-semibold bg-yellow-200 rounded-3xl cursor-pointer">
                  Head to Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridArray;
