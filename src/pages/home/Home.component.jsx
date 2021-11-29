import React, { useContext, useEffect } from 'react';
import HomeHeader from './HomeHeader.component';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/User.context';
import reloadUserContext from "../../utils/reloadUserContext";

const Home = () => {
    const {user,setUser} = useContext(UserContext);
    
    useEffect(()=>{
        if(!user)
            reloadUserContext(user,setUser);
    },[])

    return (
        <div className="page-content">
            <HomeHeader />
            <Outlet />
        </div>
    )
}

export default Home;