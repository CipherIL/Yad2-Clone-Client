import React from "react";
import {Link} from 'react-router-dom'
import ExpandableNavigationMenu from "./ExpandableNavigationMenu.component";
import { headerNavItems } from "../../../data/headerNavItems";
import { nanoid } from "nanoid";
import HeaderPersonalArea from "./HeaderPersonalArea.component";
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import HamburgerMenu from "./hambugerMenu/HamburgerMenu.component";

const Header = () => {
    const {width} = useWindowDimensions();
    const handleNavItemClick = (e,url) => {
        if(url==="") {
            e.preventDefault();
            alert("This button is not functional");
        }  
    }
    return (
        <div className="header-container">
            <div className="header__nav">
                {width <= 900 && <div className="header__nav__empty-div"></div>}
                <Link to="/">
                    <div className="header__nav-logo__container">
                        <img src="images/yad2Logo.png" alt="yad2Logo" className="header__nav-logo"/>
                    </div>
                </Link>
                {width < 1261 && <HamburgerMenu/>}
                {headerNavItems.map(navItem=>{
                    return (
                        <div className="header__nav-item" key={nanoid()}>
                            <Link to={navItem.url} className="header__nav-item__link" onClick={(e)=> handleNavItemClick(e,navItem.url)}>
                                <div className="header__nav-item__link__inner-container">
                                    <div className="header__nav-item__link__text">{navItem.text}</div>
                                </div>
                            </Link>
                            <ExpandableNavigationMenu linksList={navItem.expandableMenu}/>
                        </div>
                    );
                })}
            </div>
            {width > 900 && <HeaderPersonalArea/>}
        </div>
    );
}

export default Header;