import React from 'react';
import logo from "../images/jhblogo25th.png";
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    const homeHandler = () => {
        navigate("/");
    }
    return(
        <div className="m-5 bg-yellow-200 rounded-xl">
            <img
          src={logo}
          alt=""
          className="m-5 rounded-full cursor-pointer"
          onClick={homeHandler}
        />
            <div className="p-10">
                <p className="text-6xl text-amber-900 font-Oswald">
                C O N T A C T  U S
                </p>
            </div>
            <div className="p-2 pt-12 text-2xl pb-52 font-semibold">
                <p className="text-center">
                    Address : 7710 Windosr Mill Road, Windsor Mill, MD
                    <br/>
                    Phone Number : 443-802-1652
                    <br/>
                    Email : emma.ifedayo@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Contact;