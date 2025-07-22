import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder='User Name' required />}

                    <input type="email" placeholder='email' required />
                    <input type="password" placeholder='*******' required />
                </div>
                <div>
                    <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                    <div className="login-popup-condition">
                        <input type="checkbox" required />
                        <p>By continuing, i agree to terms of use & private policy.</p>
                    </div>
                    <div>
                        {currState === "Login" ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}> Click here</span></p> : <p>Already have an account <span onClick={() => setCurrState("Login")} >Login here</span></p>}


                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginPopup