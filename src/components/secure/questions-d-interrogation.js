import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState as useGlobalState } from "@hookstate/core";
import store from "../../store";
import quiz from "../../images/quiztime.jpg";
import { getResults, submitAnswers } from "../../services/questions"

const Questions = ({ listOfQuestions, answersDictionary }) => {
    const { user } = useGlobalState(store)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState({})
    const [previousAnswers, setPreviousAnswers] = useState({})
    const [processing, setProcessing] = useState(false)
    const index = currentQuestionIndex;
    const q = listOfQuestions[index]
    const questionid = q?.id
    const selectedAnswers = answersDictionary[questionid]
    const navigate = useNavigate()
    console.log(answers, "***")
    useEffect(() => {
        setAnswers(selectedAnswers)
    }, [selectedAnswers])
    const formik = useFormik({
        initialValues: {

        },
        onSubmit: async (values) => {
            setProcessing(false)
            submitAnswers(answers, onSubmitSuccess, true)
        },
    })
    const next = () => {
        submitAnswers(answers, onNextSuccess)
    }
    const previous = () => {
        setCurrentQuestionIndex(index - 1);
        setAnswers(previousAnswers)
    }
    const onNextSuccess = (answers) => {
        setCurrentQuestionIndex(index + 1);
        setPreviousAnswers(answers)
    }
    const onSubmitSuccess = (answers) => {
        navigate("/quiz/results")
    }
    let buttonHtml;
    const previousButton = <input
        onClick={previous}
        type="button"
        value="Previous"
        className="bg-amber-600 px-8 py-3 text-center rounded-full ml-52 my-1 cursor-pointer" />
    const nextButton = <input
    type="button"
    value="Next" onClick={next}
    className="bg-amber-600 px-8 py-2 text-center rounded-full mx-52 cursor-pointer" />
    if (index === 0) {
        buttonHtml = (
            <>
                {nextButton}
            </>
        );
    } else if (index === listOfQuestions.length - 1) {
        buttonHtml = (
            <div className="flex flex-row">
                {previousButton}
                <input
                    type="button"
                    value="Submit"
                    onClick={formik.handleSubmit}
                    className="bg-amber-600 px-8 py-3 text-center rounded-full mr-24 ml-3 my-1 cursor-pointer" />
            </div>
        );
    } else {
        <>
            {previousButton}
            {nextButton}
        </>;
    }
    return (
        <div className="grid grid-cols-2">
            <div>
                <img src={quiz} alt="" className="h-5/6 my-12 mx-10 rounded-full" />
            </div>
            <div className="bg-yellow-200 rounded-full h-screen">
                <form
                    onSubmit={formik.handleSubmit}
                    className="text-center py-48">
                    <div className="h-screen">
                        <div key={`question${index}`}>
                            <div className="font-Oswald text-xl">Question {index + 1}</div>
                            <div className="font-Oswald">{q?.question}</div>
                            <div className="ml-5">
                                {q?.type === "multiple-choice" ?
                                    <div>{q?.options.map((o, index) => {
                                        return (
                                            <div key={`options${index}`}>
                                                <input
                                                    type="radio"
                                                    id={`${q.id}-option${index}`}
                                                    name={`${q.id}-option${index}`}
                                                    onChange={() => {
                                                        formik.setFieldValue(q.id, o)
                                                        setAnswers({ ...answers, answer: o, questionid, uid: user.uid.get() })
                                                    }}
                                                    value={o}
                                                    checked={formik.values[q.id] === o || selectedAnswers?.answer === o}
                                                />
                                                {o}
                                            </div>
                                        )
                                    })}
                                    </div>
                                    :
                                    <div className="ml-5">
                                        Answer: <input
                                            type="text"
                                            name="answer"
                                            id="answer"
                                            placeholder="enter answer"
                                            className="shadow-inner rounded-lg"
                                            value={answers?.answer}
                                            onChange={(e) => { 
                                                setAnswers({ ...answers, answer: e.target.value, questionid, uid: user.uid.get() }) 
                                            }} />
                                    </div>
                                }
                                <br />
                                <div>
                                    {buttonHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}


export default Questions;