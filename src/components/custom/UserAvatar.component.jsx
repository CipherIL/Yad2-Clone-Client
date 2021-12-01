import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from '../../contexts/User.context'
const UserAvatar = ({size}) => {

    const {user} = useContext(UserContext);

    const generateUserAvatarText = () => {
        return `${user.name[0]}${user.surname[0]}`;
    }

    return (
        <div className="user-avatar__container">
            {user && <div className="user-avatar__text">{generateUserAvatarText()}</div>}
            {!user && <FontAwesomeIcon icon={["fas","user"]} size={size}/>}
        </div>
    )
}

export default UserAvatar;