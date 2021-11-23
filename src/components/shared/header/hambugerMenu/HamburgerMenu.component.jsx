import React, { useState } from "react";
import HamburgerMenuIcon from "./HamburgerMenuIcon.component";
import HamburgerMenuMenu from "./HamburgerMenuMenu.component";

const HamburgerMenu = () => {
    const [showHamburgerMenu,setShowHamburgerMenu] = useState(false);

    return (
        <div className="hamburger-menu">
            <HamburgerMenuIcon setShowHamburgerMenu={setShowHamburgerMenu}/>
            <HamburgerMenuMenu setShowHamburgerMenu={setShowHamburgerMenu}
            showHamburgerMenu={showHamburgerMenu}/>
        </div>
    )
}

export default HamburgerMenu;