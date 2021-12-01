import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from 'react-router-dom';
//Components
import LoginForm from "./LoginForm.component";
import LoginAd from "./LoginAd.component";
import RegistrationForm from "./registration/RegistrationForm.component";
//Hooks & Context
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { UserContext } from '../../contexts/User.context'
import getUserInfo from "../../utils/getUserInfo";
import Loader from "../loader/Loader.component";

const Login = () => {
    const {width} = useWindowDimensions();
    const {user,setUser} = useContext(UserContext);
    const [isLoggingIn,setIsLoggingIn] = useState(true);
    const [isLoading,setIsLoading] = useState(true);
    const [redirect,setRedirect] = useState("/");
    const [searchParams,setSearchParams] = useSearchParams();

    const toggleForm = () => {
        setIsLoggingIn(!isLoggingIn);
    }

    //reload user context if has a valid token but not logged in
    useEffect(()=>{
        if(!user) getUserInfo()
        .then(res=>{
            const urlToRedirect = searchParams.get("redirect")
            if(urlToRedirect) setRedirect(urlToRedirect)
            setIsLoading(false);
            setUser(res);
        })
        .catch(err=>{
            setIsLoading(false);
        })
    },[user,setUser])

    return (
        <>
            {isLoading && <Loader/>}
            {!isLoading && <>
                {user && <Navigate to={redirect}/>}
                {!user && <div className="page-content login">
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
                </div>}
            </>}
        </>
    )
}

export default Login;