import React from "react";

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublishPrivateRealestatePartSeven = ({selected,submitFunction}) => {
    return (
        <div className="private-realestate__selection realestate__plan">
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {"7"}</div>
                <div className="private-realestate__selection__title__text">בחירת מסלול</div>
            </div>
            
        </div>
    )
}

export default PublishPrivateRealestatePartSeven;