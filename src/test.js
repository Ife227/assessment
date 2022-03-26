import React from 'react';
import { useNavigate } from 'react-router-dom';

function GridArray() {
    const navigate = useNavigate()
    const loginHandler = () => {
        navigate('/login')
    }
    const signupHandler = () => {
        navigate('/signup')
    }

    return (
        <div className="grid grid-rows-2 text-center p-5 h-full">
            <div className="grid grid-cols-2 text-right">
                <div></div>
                <div className="p-2">
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
            <div className="grid grid-cols-2 text-right">
                <div></div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default GridArray;