import { useNavigate } from "react-router-dom";
import logo from "../../images/jhblogo25th.png";

function Start() {
  const navigate = useNavigate();
  const quizLink = () => {
    navigate("/quiz");
  };
  const homeHandler = () => {
    navigate("/");
  };

  return (
    <div className="m-5 rounded-3xl bg-yellow-200 h-screen">
      <div>
        <img
          src={logo}
          alt=""
          className="m-5 rounded-full cursor-pointer"
          onClick={homeHandler}
        />
      </div>
      <div>
        <p
          onClick={quizLink}
          className="text-2xl text-amber-700 font-semibold cursor-pointer text-center"
        >
          START QUIZ
        </p>
      </div>
    </div>
  );
}

export default Start;
