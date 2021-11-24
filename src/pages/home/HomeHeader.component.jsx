import React from "react";

const HomeHeader = () => {
    return (
        <div className="home-header">
            <div className="home-header__content__wrapper" style={{backgroundImage:'url("/images/background.png")'}}>
                <div className="home-header__content">
                    <div className="home-header__content__title"></div>
                    <img className="home-header__content__image" src="/images/maya_yadata_04_01_2021.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;