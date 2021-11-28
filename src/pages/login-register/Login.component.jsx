import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
//Components
import LoginForm from "./LoginForm.component";
import LoginAd from "./LoginAd.component";
import RegistrationForm from "./registration/RegistrationForm.component";
//Hooks & Context
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { UserContext } from '../../contexts/User.context'
import reloadUserContext from "../../utils/reloadUserContext";

const Login = () => {
    const {width} = useWindowDimensions();
    const {user,setUser} = useContext(UserContext);
    const [isLoggingIn,setIsLoggingIn] = useState(true);
    const toggleForm = () => {
        setIsLoggingIn(!isLoggingIn);
    }

    //reload user context if has a valid token but not logged in
    useEffect(()=>{
        if(!user) reloadUserContext(user,setUser);
    },[user,setUser])
    
    return (
        <>
        {user && <Navigate to="/"/>}
        <div className="page-content login">
                <div className="login__page-header">
                    {width>880 && <Link to="/" className="login__page-header__logo__container">
                        <img src="/images/yad2Logo.png" alt="logo" className="login__page-header__logo"/>
                    </Link>}
                    {width<=880 && <div className="login__page-header__return-button">
                        <img src="/images/button-arrow.png" alt="arrow" />    
                    </div>}
                </div>
                <div className="login__page-main">
                    {isLoggingIn && <LoginForm toggleForm={toggleForm}/>}
                    {!isLoggingIn && <RegistrationForm toggleForm={toggleForm}/>}
                    {width > 880 && <LoginAd/>}
                </div>
            </div>
        </>
    )
}

export default Login;