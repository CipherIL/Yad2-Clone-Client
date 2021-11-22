import React from "react";
import { Link } from "react-router-dom";
import {nanoid} from 'nanoid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ExpandableNavigationMenu = ({linksList}) => {
    const handleLinkClick = (e,url) => {
        if(url==="") {
            e.preventDefault();
            alert("This button is not functional");
        }
    }
    return (
        <div className="header__nav-item__expandable-menu">
            {linksList.map((linkSection,i)=>{
                const clssnm = "header__nav-item__expandable-menu__section"+ (i===0 ? " ml" : ""); 
                return (
                    <div className={clssnm} key={nanoid()}>
                        {linkSection.map(link=>{
                            return (
                            <Link to={link.url} key={nanoid()} className="header__nav-item__expandable-menu__link"
                             onClick={(e)=> handleLinkClick(e,link.url)}>
                                {link.logo!=="" && <div className="header__nav-item__expandable-menu__link__img">
                                    {(typeof link.logo)!=='string' && <FontAwesomeIcon icon={link.logo}/>}
                                    {(typeof link.logo)==='string' && link.logo.endsWith('.png') && 
                                     <img src={link.logo} alt={link.logo} />}
                                </div>}
                                <div className="header__nav-item__expandable-menu__link__text">{link.text}</div>
                            </Link>);
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default ExpandableNavigationMenu;