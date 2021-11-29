import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/User.context";

export function PrivateUserRoute ({children}) {
    const location = useLocation();
    const { user } = useContext(UserContext);
    return user ? children: <Navigate to={"/login?redirect="+location.pathname}/>
}