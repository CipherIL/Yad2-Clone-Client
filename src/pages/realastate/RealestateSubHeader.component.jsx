import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CustomLink from "../../components/custom/CustomLink.component";

const RealastateSubHeader = () => {
    return(
        <div className="realestate__sub-header">
            <div className="realestate__sub-header__categories">
                <CustomLink to="/realestate/forsale" baseClass="realestate__sub-header__category" exact={true}>
                    מכירה
                </CustomLink>
                <CustomLink to="/null" baseClass="realestate__sub-header__category" exact={true}>
                    השכרה
                </CustomLink>
                <CustomLink to="/null" baseClass="realestate__sub-header__category" exact={true}>
                    דירות שותפים
                </CustomLink>
                <CustomLink to="/null" baseClass="realestate__sub-header__category" exact={true}>
                    נדל"ן מסחרי
                </CustomLink>
            </div>
            <div className="realestate__sub-header__tools">
                <CustomLink to="/null" baseClass="realestate__sub-header__tool" exact={true}>
                    <FontAwesomeIcon icon={"gavel"}/> כונס נכסים 
                </CustomLink>
                <CustomLink to="/null" baseClass="realestate__sub-header__tool" exact={true}>
                    <img src="/images/doron_orange.png" alt="doron" className="realestate__sub-header__tool__image doron"/> דורון - העוזר האישי 
                </CustomLink>
                <CustomLink to="/null" baseClass="realestate__sub-header__tool" exact={true}>
                    <img src="/svgs/yad1_logo.svg" alt="yad1" className="realestate__sub-header__tool__image yad1"/> יד1 דירות חדשות
                </CustomLink>
                <CustomLink to="/null" baseClass="realestate__sub-header__tool" exact={true}>
                    <img src="/svgs/yadata_logo_black.svg" alt="yadata" className="realestate__sub-header__tool__image yadata"/> הערכת שווי נכס 
                </CustomLink>
            </div>
        </div>
    )
}

export default RealastateSubHeader;