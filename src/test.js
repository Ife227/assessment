import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./images/jhblogo25th.png"

function GridArray() {
    const navigate = useNavigate()
    const loginHandler = () => {
        navigate('/login')
    }
    const signupHandler = () => {
        navigate('/signup')
    }

    return (
        <div className="text-center p-5">
            <div className="grid grid-cols-2 text-right">
                <div>
                    <img src={logo} alt="" className="w-96 mt-24 blur-none" />
                </div>
                <div className="my-56 py-1">
                    <p className="text-6xl text-amber-900 font-Oswald text-right px-5 pb-2">
                        W E L C O M E
                    </p>
                    <button
                        onClick={signupHandler}
                        className="text-lg text-amber-700 px-2 font-semibold bg-yellow-200 rounded-3xl cursor-pointer">
                        Sign Up
                    </button>
                    |
                    <button
                        onClick={loginHandler}
                        className="text-lg text-amber-700 px-2 font-semibold bg-yellow-200 rounded-3xl cursor-pointer">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GridArray;