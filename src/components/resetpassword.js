import React, {useState} from 'react';
import { resetPasswordValidationSchema } from '../utils/form-utils';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { resetPassword } from '../services/auth';

function Reset() {
    const [serverError, setServerError] = useState('')
    const [processing, setProcessing] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: resetPasswordValidationSchema,
        onSubmit:(values)=>{
            setProcessing(true)
            //call firebase to signup
            resetPassword(values, onSuccess, onFailure)
            setProcessing(false)
        },
    })
    const onSuccess = () => {
        // callback for onSuccess
    }
    const onFailure = (message) => {
        setServerError(message)
    }
    const handleEmail = formik.handleChange
    return(
        <div className="bg-yellow-200 text-center rounded-3xl p-52 m-5 h-screen">
            <p className="text-6xl text-amber-900 font-Oswald p-10">R E S E T   P A S S W O R D</p>

            <form className="text-lg">
                <div>
                    <label>email: </label>
                    <input 
                    onClick={handleEmail} 
                    type="email" 
                    name="email" 
                    placeholder="Enter email" 
                    className="shadow-inner rounded-md px-64 py-3 placeholder:text-center p-2"/>
                </div>
                <br/>
                <div>
                    <button className="bg-amber-600 rounded-full p-2 px-32"><input type="submit" name="submit" value="Send email"/></button>
                </div>
            </form>
        </div>
    )
}

export default Reset;