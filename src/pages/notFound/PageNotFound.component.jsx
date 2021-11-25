import React from "react";

const PageNotFound = () => {
    return (
        <div className="page-content page-not-found">
            <div className="page-not-found__content-container">
                <div className="page-not-found__text">
                    <span className="page-not-found__text__title">חיפשנו בכל מקום,</span>
                    <span className="page-not-found__text__title">אבל אין לנו עמוד כזה</span>
                    <span className="page-not-found__text__subtitle">כנראה שהגעת לדף זה בטעות</span>
                </div>
                <img src="/svgs/404_vector.svg" alt="404" className="page-not-found__image"/>
                <button className="page-not-found__button">קחו אותי לעמוד הבית</button>
                
            </div>
            <span className="page-not-found__status">404</span>
        </div>
    )
}

export default PageNotFound;