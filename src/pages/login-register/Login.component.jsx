import React, { useState } from "react";
import LoginForm from "./LoginForm.component";
import { Link } from 'react-router-dom';
import LoginAd from "./LoginAd.component";
import RegistrationForm from "./RegistrationForm.component";
import useWindowDimensions from '../../hooks/useWindowDimensions';
const Login = () => {
    const {width} = useWindowDimensions();
    const [isLoggingIn,setIsLoggingIn] = useState(true);
    const toggleForm = () => {
        setIsLoggingIn(!isLoggingIn);
    }
    return (
        <div className="page-content login">
            <div className="login__page-header">
                {width>880 && <Link to="/" className="login__page-header__logo__container">
                    <img src="/images/yad2Logo.png" alt="logo" className="login__page-header__logo"/>
                </Link>}
                {width<=880 && <div></div>}
            </div>
            <div className="login__page-main">
                {isLoggingIn && <LoginForm toggleForm={toggleForm}/>}
                {!isLoggingIn && <RegistrationForm toggleForm={toggleForm}/>}
                {width > 880 && <LoginAd/>}
            </div>
        </div>
    )
}

export default Login;