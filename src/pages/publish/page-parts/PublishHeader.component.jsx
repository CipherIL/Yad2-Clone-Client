import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { UserContext } from '../../../contexts/User.context'

const PublishHeader = () => {
    const {user} = useContext(UserContext)
    const {width} = useWindowDimensions();
    const handleInactiveLink = (e) => {
        alert("This link is not functional")
    }

    return (
        <div className="publish-page__header">
            <div className="publish-page__header__title">
                <Link to="/">
                    <img src="/images/yad2Logo.png" alt="yad2Logo" className="publish-page__header__title__logo"/>
                </Link>
                {width>620 && <span className="publish-page__header__title__text">פרסום מודעה חדשה</span>}
            </div>
            <div className="publish-page__header__links">
                <Link to="/personal" className="publish-page__header__link">
                    <FontAwesomeIcon icon={["fas","user"]} className="publish-page__header__link__icon orange"/>
                    <span className="publish-page__header__link__text orange">{user.name}</span>
                </Link>
                <div className="publish-page__header__link" onClick={handleInactiveLink}>
                    {width<=620 && <FontAwesomeIcon icon={["fas","question-circle"]} 
                    className="publish-page__header__link__icon orange"/>}
                    {width>620 && <span className="publish-page__header__link__text">צרו קשר</span>}
                </div>
            </div>
        </div>
    )
}

export default PublishHeader;