import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/auth";
import { useFormik } from "formik";
import { signUpValidationSchema } from "../utils/form-utils";
import { FaSpinner } from "react-icons/fa";
import logo from "../images/jhblogo25th.png";
import store from "../store";

function SignUp() {
    const { user } = useState(store);
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      password: "",
      passwordconfirm: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      setProcessing(true);
      //call firebase to signup
      signUp(values, onSuccess);
    },
  });
  // navigation stuff
  const homeHandler = () => {
    navigate("/");
  };
  const loginHandler = () => {
    navigate("/login");
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
  const handleFullName = formik.handleChange;
  const handleEmail = formik.handleChange;
  const handlePassword = formik.handleChange;
  const handlePhonenumber = formik.handleChange;
  const handlePasswordConfirm = formik.handleChange;

  return (
    <div className="bg-yellow-200 m-5 rounded-3xl text-center pb-16">
      <div className="my-5 grid grid-cols-3">
        <div>
          <img
            src={logo}
            alt=""
            className="m-5 rounded-full cursor-pointer"
            onClick={homeHandler}
          />
        </div>
        <div>
          <p className="text-6xl text-amber-700 font-Oswald mb-5 pt-2">
            S I G N U P
          </p>
        </div>
        <div className="text-amber-700 text-center">
          <button
            onClick={aboutHandler}
            className="text-lg font-semibold pt-1 px-2 cursor-pointer"
          >
            about
          </button>
          |
          <button
            onClick={loginHandler}
            className="text-lg font-semibold px-2 cursor-pointer"
          >
            sign in
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
        className="text-lg bg-amber-200 mx-64 py-2 rounded-3xl m-1 h-fit"
      >
        <div>
          <label>name: </label>
          <input
            id="fullname"
            onChange={handleFullName}
            type="text"
            name="fullname"
            value={formik.values.fullname}
            placeholder="enter first and last name"
            className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center"
          />
          <div className="text-yellow-700 text-xs">
            {formik.errors.fullname}
          </div>
        </div>
        <br />
        <div>
          <label>email: </label>
          <input
            id="email"
            onChange={handleEmail}
            type="text"
            name="email"
            value={formik.values.email}
            placeholder="enter email"
            className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center"
          />
          <div className="text-yellow-700 text-xs">{formik.errors.email}</div>
        </div>
        <br />
        <div>
          <label>phone number: </label>
          <input
            id="phonenumber"
            onChange={handlePhonenumber}
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phonenumber"
            value={formik.values.phonenumber}
            placeholder="enter phone number"
            className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center"
          />
          <div className="text-yellow-700 text-xs">
            {formik.errors.phonenumber}
          </div>
        </div>
        <br />
        <div>
          <label>password: </label>
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            value={formik.values.password}
            placeholder="enter password"
            className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center"
          />
          <div className="text-yellow-700 text-xs">
            {formik.errors.password}
          </div>
        </div>
        <br />
        <div>
          <label>confirm password: </label>
          <input
            onChange={handlePasswordConfirm}
            type="password"
            name="passwordconfirm"
            value={formik.values.passwordconfirm}
            placeholder="enter password again"
            className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center"
          />
          <div className="text-yellow-700 text-xs">
            {formik.errors.passwordconfirm}
          </div>
        </div>
        <br />
        <button className="bg-amber-600 rounded-full py-2 px-32 mx-60 font-Oswald font-bold flex flex-row">
          <input type="submit" value="sign up" name="submit" />

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
    </div>
  );
}

export default SignUp;
