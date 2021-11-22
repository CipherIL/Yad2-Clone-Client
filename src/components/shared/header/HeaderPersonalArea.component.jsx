import React from "react";
import { Link } from "react-router-dom";
import PublishAdButton from "../../custom/PublishAdButton.component";
import UserAvatar from "../../custom/UserAvatar.component";
import HeaderPersonalAreaUserExpand from "./HeaderPesonalAreaUserExpand.component";
import HeaderPersonalAreaLikesExpand from "./HeaderPersonalAreaLikesExpand.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderPersonalArea = () => {
    return (
        <div className="header__personal">
            <div className="header__personal__section">
                <Link to="" className="header__personal__section__icon__container">
                    <FontAwesomeIcon icon={["fas","bell"]}/>
                </Link>
            </div>
            <div className="header__personal__section">
                <Link to="" className="header__personal__section__icon__container">
                    <FontAwesomeIcon icon={["fas","heart"]}/>
                </Link>
                <div className="header__personal__section__expandable-content">
                    <HeaderPersonalAreaLikesExpand/>
                </div>
            </div>
            <div className="header__personal__section">
                <Link to="" className="header__personal__section__icon__container">
                    <UserAvatar/>
                </Link>
                <div className="header__personal__section__expandable-content">
                    <HeaderPersonalAreaUserExpand/>
                </div>
            </div>
            <PublishAdButton buttonText="+ פרסום מודעה חדשה"/>
        </div>
    )
}

export default HeaderPersonalArea;