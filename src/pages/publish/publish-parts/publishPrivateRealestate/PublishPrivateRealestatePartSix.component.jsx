import React from "react";

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublishPrivateRealestatePartSix = ({selected,completed,returnButton,reopen,submitFunction}) => {
    return (
        <div className="private-realestate__selection realestate__address">
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {completed?<FontAwesomeIcon icon={["fas","check"]}/>:"6"}</div>
                <div className="private-realestate__selection__title__text">פרטים ליצירת קשר</div>
            </div>
            {completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
        </div>
    )
}

export default PublishPrivateRealestatePartSix;