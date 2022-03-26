import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';
import { useFormik } from 'formik';
import { signUpValidationSchema } from '../utils/form-utils';
import { FaSpinner } from 'react-icons/fa';

function SignUp() {
    const [processing, setProcessing] = useState(false)
    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            phonenumber: '',
            password: '',
            passwordconfirm: ''
        },
        validationSchema: signUpValidationSchema,
        onSubmit: (values) => {
            setProcessing(true)
            //call firebase to signup
            signUp(values, onSuccess)
            setProcessing(false)
        }
    })
    // navigation stuff
    const navigate = useNavigate()
    const loginHandler = () => {
        navigate('/login')
    }
    const aboutHandler = () => {
        navigate('/about')
    }
    const contactHandler = () => {
        navigate('/contact')
    }
    const onSuccess = () => {
        // caback for onSuccess
        navigate('/home')
    }
    const handleFullName = formik.handleChange
    const handleEmail = formik.handleChange
    const handlePassword = formik.handleChange
    const handlePhonenumber = formik.handleChange
    const handlePasswordConfirm = formik.handleChange

    return (
        <div className="bg-yellow-200 m-5 rounded-3xl text-center h-screen">
            <div className="grid grid-cols-3 h-fit pb-5">
                <div></div>
                <div>
                    <p className="text-6xl text-amber-700 font-Oswald mb-10 pt-2">S I G N U P</p>
                </div>
                <div className="text-amber-700">
                    <button onClick={aboutHandler} className="text-lg font-semibold pt-1 px-2 cursor-pointer">about</button>
                     |
                    <button onClick={loginHandler} className="text-lg font-semibold px-2 cursor-pointer">sign in</button>
                     |
                    <button onClick={contactHandler} className="text-lg font-semibold px-2 cursor-pointer">contact us</button>
                </div>
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className="text-lg bg-amber-200 mx-64 py-5 rounded-3xl m-3 h-fit">
                <div>
                    <label>name: </label>
                    <input
                        id="fullname"
                        onChange={handleFullName}
                        type="text"
                        name="fullname"
                        value={formik.values.fullname}
                        placeholder="enter first and last name"
                        className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center" />
                    <div className="text-yellow-700 text-xs">{formik.errors.fullname}</div>
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
                        className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center" />
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
                        className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center" />
                    <div className="text-yellow-700 text-xs">{formik.errors.phonenumber}</div>
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
                        className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center" />
                    <div className="text-yellow-700 text-xs">{formik.errors.password}</div>
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
                        className="shadow-inner rounded-lg px-32 p-1 placeholder:text-center" />
                    <div className="text-yellow-700 text-xs">{formik.errors.passwordconfirm}</div>
                </div>
                <br />
                <button
                    className="bg-amber-600 rounded-full py-2 px-32 font-Oswald font-bold">
                    <input
                        type="submit"
                        value="sign up"
                        name="submit" />

                    {processing && <FaSpinner
                        icon="spinner"
                        className="spinner animate-spin"
                        color="blue"
                        size={35} />}
                </button>
            </form>
            <div className="h-fit">

            </div>
        </div>
    )
}

export default SignUp;