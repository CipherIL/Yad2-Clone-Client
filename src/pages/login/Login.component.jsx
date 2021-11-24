import React from "react";
import LoginForm from "./LoginForm.component";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="page-content login">
            <div className="login__page-header">
                <Link to="/" className="login__page-header__logo__container">
                    <img src="/images/yad2Logo.png" alt="logo" className="login__page-header__logo"/>
                </Link>
            </div>
            <div className="login__page-main">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;