import React, { useState } from "react";
import { resetPasswordValidationSchema } from "../utils/form-utils";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { resetPassword } from "../services/auth";
import logo from "../images/jhblogo25th.png";

function Reset() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [processing, setProcessing] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: (values) => {
      console.log("got here");
      setProcessing(true);
      //call firebase to signup
      resetPassword(values, onSuccess, onFailure);
    },
  });
  const homeHandler = () => {
    navigate("/");
  };
  const loginHandler = () => {
      navigate("/login");
  }
  const onSuccess = () => {
    // callback for onSuccess
    setProcessing(false);
  };
  const onFailure = (message) => {
    setServerError(message);
  };
  const reset = () => {
      alert("please check your email for a message regarding instructions on how to change your password.");
  }
  const handleEmail = formik.handleChange;
  return (
    <div className="bg-yellow-200 text-center rounded-3xl m-5 h-screen">
      <img
        src={logo}
        alt=""
        className="m-5 rounded-full cursor-pointer"
        onClick={homeHandler}
      />
      <p className="text-6xl text-amber-900 font-Oswald p-3 pt-24">
        RESET YOUR PASSWORD
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="text-xl">
          <label>email: </label>
          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="enter email"
            className="shadow-inner rounded-md px-64 py-3 placeholder:text-center p-2"
          />
        </div>
        <div className="text-yellow-700 text-xs">{formik.errors.email}</div>
        <br />
        <div className="text-lg">
          <button className="bg-amber-600 rounded-full p-2 px-32 cursor-pointer">
            <input type="submit" name="submit" value="send email" onClick={reset} className="cursor-pointer"/>
          </button>
        </div>
        <div>
          {serverError}
          <p
            onClick={loginHandler}
            className="text-lg text-amber-700 font-semibold cursor-pointer mx-96 mt-3"
          >
            back to log in
          </p>
        </div>
      </form>
    </div>
  );
}

export default Reset;
