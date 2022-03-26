import React from 'react';

import { useNavigate } from 'react-router-dom';

function About() {
    return(
        <div className="m-5 bg-yellow-200 rounded-3xl h-screen text-center">
            <div className="p-10">
                <p className="text-6xl text-amber-700 font-Oswald p-10">A B O U T</p>
            </div>
            <p className="p-10 text-2xl font-Oswald">
                Jesus House Baltimore is an institution that
             welcomes people from all walks of life and challenges them to maximize their God-given potentials.
             <br/>
             This website is meant to serve as a portal for any registered user to test their knowledge in a wide 
             array of subjects.
            </p>
        </div>
    )
}

export default About;