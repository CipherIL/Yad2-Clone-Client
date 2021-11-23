import React from "react";
import { Link } from "react-router-dom";
import PublishAdButton from "../../custom/PublishAdButton.component";
import UserAvatar from "../../custom/UserAvatar.component";
import HeaderPersonalAreaUserExpand from "./HeaderPesonalAreaUserExpand.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const HeaderPersonalArea = () => {
    const { width } = useWindowDimensions();
    const handleLinkClick = (e,url) => {
        if(url==="") {
            e.preventDefault();
            alert("This button is not functional");
        }
    }

    return (
        <div className="header__personal">
            <div className="header__personal__section">
                <Link to="" className="header__personal__section__icon__container" onClick={(e)=>handleLinkClick(e,"")}>
                    <FontAwesomeIcon icon={["fas","bell"]}/>
                    {width>1640 && <div className="header__personal__section__icon__text">התראות</div>}
                </Link>
            </div>
            <div className="header__personal__section">
                <Link to="" className="header__personal__section__icon__container" onClick={(e)=>handleLinkClick(e,"")}>
                    <FontAwesomeIcon icon={["fas","heart"]}/>
                    {width>1640 && <div className="header__personal__section__icon__text">מודעות שאהבתי</div>}
                </Link>
            </div>
            <div className="header__personal__section">
                <Link to="/login" className="header__personal__section__icon__container" onClick={(e)=>handleLinkClick(e,"/login")}>
                    <UserAvatar size={"1x"}/>
                    {width>1640 && <div className="header__personal__section__icon__text">התחברות</div>}
                </Link>
                <div className="header__personal__section__expandable-content__container">
                    <HeaderPersonalAreaUserExpand/>
                </div>
            </div>
            <PublishAdButton buttonText="+ פרסום מודעה חדשה"/>
        </div>
    )
}

export default HeaderPersonalArea;