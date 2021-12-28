import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoPostsPlaceholder = () => {
    return (
        <div className="no-posts-placeholder">
            <div className="no-posts-placeholder__logo-container">
                <img src="https://assets.yad2.co.il/yad2site/y2assets/images/last_name_search.png" alt="searchLogo" />
            </div>
            <div className="no-posts-placeholder__text-container">
                <div className="no-posts-placeholder__text-title">
                    <span>לא נמצאו תוצאות לחיפוש,</span>
                    <br />
                    <span>אל תפספסו אף מודעה!</span>
                </div>
                <div className="no-posts-placeholder__text-subtitle">
                    <span>צרו התראה וקבלו את המודעות הרלוונטיות למייל</span>
                </div>
            </div>
            <div className="no-posts-placeholder__button-container">
                
                <button onClick={(e)=>{
                    e.preventDefault();
                    alert("This button is not functional")  
                }}>
                    <FontAwesomeIcon icon={"bell"}/>
                    ליצירת התראה
                </button>
            </div>
        </div>
    )
}

export default NoPostsPlaceholder;