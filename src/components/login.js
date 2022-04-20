import React, { useState } from "react";
// import { Profiler } from "react/cjs/react.production.min";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { logInValidationSchema } from "../utils/form-utils";
import { FaSpinner } from "react-icons/fa";
import { signIn } from "../services/auth";
import logo from "../images/jhblogo25th.png";

function Login({ description }) {
  const [serverError, setServerError] = useState("");
  const [processing, setProcessing] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInValidationSchema,
    onSubmit: (values) => {
      setProcessing(true);
      //call firebase to signup
      signIn(values, onSuccess, onFailure);
    },
  });
  // navigation stuff
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };
  const signupHandler = () => {
    navigate("/signup");
  };
  const passwordForgot = () => {
    navigate("/password_reset");
  };
  const aboutHandler = () => {
    navigate("/about");
  };
  const contactHandler = () => {
    navigate("/contact");
  };
  const onSuccess = () => {
    // callback for onSuccess
    setProcessing(false);
    navigate("/quiz/start");
  };
  const onFailure = (message) => {
    setServerError(message);
  };
  const handleEmail = formik.handleChange;
  const handlePassword = formik.handleChange;

  return (
    <div className="bg-yellow-200 m-5 rounded-3xl grid grid-rows-3 text-center">
      <div className="grid grid-cols-3">
        <div>
          <img
            src={logo}
            alt=""
            className="m-5 rounded-full cursor-pointer"
            onClick={homeHandler}
          />
        </div>
        <div>
          <p className="text-6xl text-amber-700 font-Oswald pt-2">
            S I G N I N
          </p>
        </div>
        <div className="text-amber-700">
          <button
            onClick={aboutHandler}
            className="text-lg font-semibold px-2 cursor-pointer"
          >
            about
          </button>
          |
          <button
            onClick={signupHandler}
            className="text-lg font-semibold px-2 cursor-pointer"
          >
            sign up
          </button>
          |
          <button
            onClick={contactHandler}
            className="text-lg font-semibold px-2 cursor-pointer"
          >
            contact us
          </button>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="text-lg bg-amber-200 mx-64 py-5 rounded-3xl"
      >
        <div>
          <label>email: </label>
          <input
            id="email"
            onChange={handleEmail}
            name="email"
            value={formik.values.email}
            placeholder="enter email"
            className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center"
          />
          <div className="text-yellow-700 text-xs">{formik.errors.email}</div>
        </div>
        <br />
        <div>
          <label>password: </label>
          <input
            id="password"
            onChange={handlePassword}
            type="password"
            name="password"
            value={formik.values.password}
            placeholder="enter your password"
            className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center"
          />
          <div className="text-yellow-700 text-xs">
            {formik.errors.password}
          </div>
        </div>
        <br />
        <button className="bg-amber-600 rounded-full py-2 px-32 mx-60 font-Oswald font-bold flex flex-row">
          <input type="submit" name="submit" value="log in" />

          {processing && (
            <FaSpinner
              icon="spinner"
              className="spinner animate-spin"
              color="orange"
              size={30}
            />
          )}
        </button>
      </form>
      <div>
        <p
          onClick={passwordForgot}
          className="text-lg text-amber-700 font-semibold cursor-pointer mx-96 mt-3"
        >
          forgot password
        </p>
      </div>
    </div>
  );
}

export default Login;
