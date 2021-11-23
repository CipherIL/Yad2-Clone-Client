import React from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const HamburgerMenuIcon = ({setShowHamburgerMenu}) => {
    const { width } = useWindowDimensions();
    const openHamburgerMenu = () => {
        setShowHamburgerMenu(true);
    }
    return (
        <div className="hamburger-menu-icon__contianer" onClick={openHamburgerMenu}>
            <div className="hamburger-menu-icon__icon">
                <div className="hamburger-menu-icon__icon__line"></div>
                <div className="hamburger-menu-icon__icon__line"></div>
                <div className="hamburger-menu-icon__icon__line"></div>
            </div>
            {width > 900 && <div className="hamburger-menu-icon__text">תפריט</div>}
        </div>
    )
}

export default HamburgerMenuIcon;