import React, { useContext, useEffect, useState } from 'react';
import HomeHeader from './HomeHeader.component';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/User.context';
import getUserInfo from "../../utils/getUserInfo";
import Loader from '../loader/Loader.component'
const Home = () => {
    const {user,setUser} = useContext(UserContext);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        if(!user)
            getUserInfo()
            .then(res=>{
                setIsLoading(false);
                setUser(res);
            })
            .catch(err=>{
                setIsLoading(false);
            })
        else setIsLoading(false);
    },[])

    return (
        <>
        {isLoading && <Loader/>}
        {!isLoading &&
        <div className="page-content">
            <HomeHeader />
            <Outlet />
        </div>}
        </>
    )
}

export default Home;