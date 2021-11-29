import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../server/user.requests';


const HeaderPersonalAreaUserExpand = ({user,setUser}) => {
    const navigate = useNavigate();
    const handleClickNotFunctional = (e) => {
        e.stopPropagation();
        alert("This button is not functional");
    }
    const handlePersonalClick = (e) => {
        e.stopPropagation();
        navigate('/personal');
    }
    const handleLogoutClick = (e) => {
        e.stopPropagation();
        logoutUser()
        .then(res=>{
            setUser(undefined);
        })
        .catch(err=>{
            alert(err.response.data)
        })
    }
    return (
        <div className="user-avatar__expandable-content">
                <div className="user-avatar__expandable-content__link" onClick={handlePersonalClick}>
                    <div className="user-avatar__expandable-content__link__icon"><FontAwesomeIcon icon={["fas","user"]}/></div>
                    <span className="user-avatar__expandable-content__link__text">איזור אישי</span>
                </div>
                <div className="user-avatar__expandable-content__link" onClick={handleClickNotFunctional}>
                    <div className="user-avatar__expandable-content__link__icon"><FontAwesomeIcon icon={["fas","exchange-alt"]}/></div>
                    <span className="user-avatar__expandable-content__link__text">השוואת רכבים</span>
                </div>
                <div className="user-avatar__expandable-content__link" onClick={handleClickNotFunctional}>
                    <div className="user-avatar__expandable-content__link__icon"><FontAwesomeIcon icon={["fas","history"]}/></div>
                    <span className="user-avatar__expandable-content__link__text">חיפושים אחרונים</span>
                </div>
                {user && <div className="user-avatar__expandable-content__link" onClick={handleLogoutClick}>
                    <div className="user-avatar__expandable-content__link__icon"><FontAwesomeIcon icon={["fas","sign-out-alt"]}/></div>
                    <span className="user-avatar__expandable-content__link__text">התנתקות</span>
                </div>}
            </div>
    )
}

export default HeaderPersonalAreaUserExpand;