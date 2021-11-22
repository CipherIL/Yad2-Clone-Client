import React from "react";
import { useNavigate } from "react-router-dom";

const PublishAdButton = ({buttonText,classname="publish-ad-button"}) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/publish');
    }
    return (
        <button className={classname} onClick={handleButtonClick}>{buttonText}</button>
    )
}

export default PublishAdButton;