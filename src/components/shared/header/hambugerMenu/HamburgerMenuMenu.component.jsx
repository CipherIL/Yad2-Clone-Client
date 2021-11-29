import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import UserAvatar from '../../../custom/UserAvatar.component';
import PublishAdButton from '../../../custom/PublishAdButton.component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hamburgerMenuQuickList, navigationList, footerButtons } from "../../../../data/hambugerMenuLists";
import { nanoid } from 'nanoid';
import HamburgerMenuFooterButton from "./HamburgerMenuFooterButton.component";
import { UserContext } from "../../../../contexts/User.context";

const HamburgerMenuMenu = ({showHamburgerMenu,setShowHamburgerMenu}) => {
    const [modlaClassName,setModalClassName] = useState("hamburger-menu__menu__modal hide");
    const [modalBGClassName,setModalBGClassName] = useState("hamburger-menu__menu__modal__background hide");
    const [modalSideBarClassName,setModalSideBarClassName] = useState("hamburger-menu__menu__modal__sidebar hide");
    const [selectedCategory,setSelectedCategory] = useState(undefined);
    const {user,setUser} = useContext(UserContext);
    const closeHamburgerMenu = () => {
        setShowHamburgerMenu(false);
    }
    const handleSidebarClick = (e) => {
        e.stopPropagation()
    }
    const handleLinkClick = (e,url) => {
        if(url==="") {
            e.preventDefault();
            alert("This button is not functional");
        }
    }

    const handleCategoryClick = (e) => {
        if(e.target.children.length === 1) { //not a category,but link
            alert("This button is not functional");
        }
        else {
            if(!selectedCategory) setSelectedCategory(e.target);  
            else {
                selectedCategory.children[1].children[0].classList.remove('rotate');
                selectedCategory.nextSibling.classList.remove('show');
                if(selectedCategory === e.target) setSelectedCategory(undefined);
                else setSelectedCategory(e.target);
            }
        }
    }
    useEffect(()=>{
        if(selectedCategory) {
            selectedCategory.children[1].children[0].classList.add('rotate');
            selectedCategory.nextSibling.classList.add('show');
        }
    },[selectedCategory])
    useEffect(()=>{
        if(showHamburgerMenu) {
            setModalClassName("hamburger-menu__menu__modal");
            setTimeout(()=>{
                setModalBGClassName("hamburger-menu__menu__modal__background");
                setModalSideBarClassName("hamburger-menu__menu__modal__sidebar");
            },1)
        }
        else {
            setModalBGClassName("hamburger-menu__menu__modal__background hide");
            setModalSideBarClassName("hamburger-menu__menu__modal__sidebar hide");
            setTimeout(()=>{
                setModalClassName("hamburger-menu__menu__modal hide");
            },500)

        }
    },[showHamburgerMenu])

    return (

        <div className={modlaClassName} onClick={closeHamburgerMenu}>
            <div className={modalBGClassName}></div>
            <div className={modalSideBarClassName} onClick={handleSidebarClick}>
                <div className="hamburger-menu__menu__modal__sidebar__close" onClick={closeHamburgerMenu}>&#10005;</div>
                <div className="hamburger-menu__menu__modal__sidebar__section personal">
                    <Link to={user?"/personal-area":"/login"}>
                        <UserAvatar size={"2x"}/>
                        <span>{user?user.name:"התחברות"}</span>
                    </Link>
                    <PublishAdButton buttonText={"פרסום מודעה"} classname={"publish-ad-button hamburger"}/>
                    <div className="links__container">
                        <Link to="" className="header__personal__section__icon__container" onClick={(e)=>handleLinkClick(e,"")}>
                            <FontAwesomeIcon icon={["fas","bell"]}/>
                            <div className="header__personal__section__icon__text">התראות</div>
                        </Link>
                        <Link to="" className="header__personal__section__icon__container" onClick={(e)=>handleLinkClick(e,"")}>
                            <FontAwesomeIcon icon={["fas","heart"]}/>
                            <div className="header__personal__section__icon__text">מודעות שאהבתי</div>
                        </Link>
                        <Link to="" className="header__personal__section__icon__container" onClick={(e)=>handleLinkClick(e,"")}>
                            <FontAwesomeIcon icon={["fas","search"]}/>
                            <div className="header__personal__section__icon__text">חיפושים אחרונים</div>
                        </Link>
                        <Link to="" className="header__personal__section__icon__container" onClick={(e)=>handleLinkClick(e,"")}>
                            <FontAwesomeIcon icon={["fas","exchange-alt"]}/>
                            <div className="header__personal__section__icon__text">השוואת רכבים</div>
                        </Link>
                    </div>
                </div>   
                <div className="hamburger-menu__menu__modal__sidebar__section quick-search">
                    <div className="hamburger-menu__menu__modal__sidebar__section__title">חיפוש מהיר באתר</div>
                    <div className="links-container">
                        {hamburgerMenuQuickList.map(item=>{
                            return (
                                <Link to={item.url} key={nanoid()} className="link" onClick={(e)=>{handleLinkClick(e,item.url)}}>
                                    <FontAwesomeIcon icon={item.logo}/>
                                    <div className="link__text">{item.name}</div>
                                </Link>
                            )
                        })}
                    </div>
                </div> 
                <div className="hamburger-menu__menu__modal__sidebar__section navigate">
                    <div className="hamburger-menu__menu__modal__sidebar__section__title">ניווט לפי קטגוריות</div>
                    <div className="categories-container">
                        {navigationList.map((item,i)=>{
                            return (
                                <div className="category__container" key={i}>
                                    <div className="category__title" onClick={(e)=>{handleCategoryClick(e)}}>
                                        <div className="category__title__text">{item.name}</div>
                                        {item.expandableMenu.length > 0 && <div className="category__title__arrow">
                                            <img src="/images/button-arrow.png" alt="arrow" /></div>}
                                    </div>
                                    <div className="category__expandable-content">
                                        {item.expandableMenu.map(link=>{
                                            return (
                                                <Link to={link.url} key={nanoid()} className="link" 
                                                onClick={(e)=>{handleLinkClick(e,link.url)}}>
                                                    {link.text}
                                                </Link>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>     
                <div className="hamburger-menu__menu__modal__sidebar__section hamburger-menu-footer">
                    {footerButtons.map(button=>{
                        return <HamburgerMenuFooterButton iconName={button.iconName} 
                        subtitle={button.subtitle} key={nanoid()}/>
                    })}
                </div>   
            </div>
        </div>
    )
}

export default HamburgerMenuMenu;