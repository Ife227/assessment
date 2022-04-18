import { useState } from "@hookstate/core";
import { React, useEffect } from "react";
import store from "../../store";
import { showResults } from "../../services/questions";

function Results() {
  const { user, results } = useState(store);

  useEffect(() => {
    showResults(user.uid.get());
  }, []);

  return (
    <div className="h-screen">
      <div className="bg-yellow-200 m-5 rounded-xl p-5">
        <div className="font-Oswald text-3xl text-amber-700 text-center">
          C O N G R A T U L A T I O N S! _ Y O U ' V E _ F I N I S H E D!
        </div>
        <div>
          Number of Correct: {results.correctnumber}
          <br /> Number of Incorrect: {results.incorrectnumber}
          <br /> Percentage: {}%
        </div>
      </div>
    </div>
  );
}

export default Results;
