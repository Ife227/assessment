import React from 'react';

import { useNavigate } from 'react-router-dom';

function Contact() {
    return(
        <div className="m-5 bg-amber-200 rounded-xl">
            <div className="p-10">
                <p className="text-6xl text-amber-900 font-Oswald">
                C O N T A C T  U S
                </p>
            </div>
            <div className="p-2 text-2xl">
                <p className="text-center">
                    Address : 7710 Windosr Mill Road, Windsor Mill, MD
                    <br/>
                    Phone Number : 123-456-7890
                    <br/>
                    Email : john.doe@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Contact;