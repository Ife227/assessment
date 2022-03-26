import react from "react";
import { useFormik } from "formik";

const Questions = ({ listOfQuestions }) => {
    const formik = useFormik({
        initialValues: {
            // ugh (placeholder)
            // "we need to generate the initial values" - Uncle Ayo, 2022
        },
        onSubmit: (values) => {
            // ugh (placeholder)
        },
    })
    return (
        <div className="bg-yellow-200 m-5 rounded-2xl h-screen">
            {listOfQuestions.map((q, index) => {
                console.log(q.type)
                return (
                    <form
                        onSubmit={formik.handleSubmit}>
                        <div key={`question${index}`} className="p-2">
                            <div className="font-Oswald text-900">Question {index + 1}</div>
                            <div>{q.question}</div>
                            <div>{q.type === "multiple-choice" ?
                                <>{q.options.map((o, i) => {
                                    return (
                                        <div className="ml-5" key={`option${index}`}>
                                            <input
                                                type="radio"
                                                name={`option${index}`}
                                                id={`option${index}`}
                                                value=" " />
                                            {o}
                                        </div>
                                    )
                                })}</> :
                                <div className="ml-5">
                                    Answer: <input
                                        type="text"
                                        name="answer"
                                        id="answer"
                                        className="shadow-inner rounded-lg" />
                                </div>}
                            </div>
                            <br />
                        </div>
                    </form>
                );
            })}
            <input className="bg-amber-600 px-32 py-2 text-center rounded-full mx-2" type="sumbit" value="Submit"/>
        </div>
    )
}

export default Questions;