import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HamburgerMenuFooterButton = ({iconName,subtitle}) => {
    
    const handleButtonClick = (e) => {
        e.preventDefault();
        alert("This button is not functional");
    }
 
    return (
        <Link to="" className="hamburger-menu-footer-button" onClick={(e)=>handleButtonClick(e)}>
            <div className="hamburger-menu-footer-button__icon__container">
                <FontAwesomeIcon icon={iconName}/>
            </div>
            <div className="hamburger-menu-footer-button__subtitle">
                {subtitle}
            </div>
        </Link>
    )
}

export default HamburgerMenuFooterButton;