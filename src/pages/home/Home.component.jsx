import React from 'react';
import HomeHeader from './HomeHeader.component';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page-content">
            <HomeHeader />
            <Outlet />
        </div>
    )
}

export default Home;