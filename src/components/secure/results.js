import { useState } from "@hookstate/core";
import { React, useEffect } from "react";
import store from "../../store";
import { showResults } from "../../services/questions";
import { useNavigate } from "react-router";
import logo from "../../images/jhblogo25th.png";

function Results() {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };
  const { user, results } = useState(store);
  const uid = user.uid.get();
  return (
    <div className="bg-yellow-200 mx-5 my-10 rounded-xl p-5">
      <img
        src={logo}
        alt=""
        className="m-5 rounded-full cursor-pointer"
        onClick={homeHandler}
      />
      <div className="font-Oswald text-6xl text-amber-900 text-center pt-10">
        C O N G R A T U L A T I O N S! _ Y O U ' V E _ F I N I S H E D!
      </div>
      <div className="text-center m-24 font-semibold text-lg">
        Number of Correct Answers : {results[0]?.correctnumber?.get()}
        <br/> Number of Incorrect Answers : {results[0]?.incorrectnumber?.get()}
      </div>
      <div className="text-lg text-amber-700 font-semibold text-center mt-3 pb-3">
          If you do not see your results immediately, please refresh the screen and try again.
      </div>
    </div>
  );
}

export default Results;
