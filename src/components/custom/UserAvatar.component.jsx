import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserAvatar = ({size,username}) => {
    const generateUserAvatarText = () => {

    }
    return (
        <div to="/personal-area" className="user-avatar__container">
            {username && <div className="user-avatar__text">{generateUserAvatarText()}</div>}
            {!username && <FontAwesomeIcon icon={["fas","user"]} size={size}/>}
        </div>
    )
}

export default UserAvatar;