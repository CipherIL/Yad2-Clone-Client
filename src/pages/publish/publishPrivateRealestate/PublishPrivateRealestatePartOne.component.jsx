import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublishPrivateRealestatePartOne = ({selectFunction,reopen,completed}) => {
    
    const [state,setState] = useState("");

    const getTitle = (value) => {
        switch(value) {
            case "מכירה" : {
                return "אני רוצה למכור נכס";
            }
            case "השכרה" : {
                return "אני רוצה להשכיר נכס";
            }
            case "שותפים": {
                return "אני מחפש שותף";
            }
            case "מסחרי" : {
                return "אני רוצה לפרסם נכס מסחרי";
            }
            default : return "";
        }
    }

    const selectType = (e,type) => {
        e.stopPropagation();
        setState(type);
        selectFunction("CHANGE_FIRST_FORM_VALUES",{category:type});
    }

    return (
        <div className={"private-realestate__selection realestate__type"+(completed?" completed":"")} onClick={reopen}>
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(!completed?" selected":"")}>
                    {completed?<FontAwesomeIcon icon={["fas","check"]}/>:"1"}</div>
                <div className="private-realestate__selection__title__text">
                    {completed && getTitle(state)}
                    {!completed && "באיזו קטגוריה נפרסם היום?"}
                </div>
            </div>
            {completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            { !completed && <>
            <div className="private-realestate__selection__selections">
                <button className="private-realestate__selection__button" onClick={(e)=>selectType(e,"מכירה")}>
                    <img src="/svgs/sale_realestate.svg" alt="sale" className="private-realestate__selection__button__icon"/>
                    <div className="private-realestate__selection__button__title">מכירה</div>
                </button>
                <button className="private-realestate__selection__button" onClick={(e)=>selectType(e,"השכרה")}>
                    <img src="/svgs/renting_realestate.svg" alt="rent" className="private-realestate__selection__button__icon"/>
                    <div className="private-realestate__selection__button__title">השכרה</div>
                </button>
                <button className="private-realestate__selection__button" onClick={(e)=>selectType(e,"שותפים")}>
                    <img src="/svgs/partners_realestate.svg" alt="roomates" className="private-realestate__selection__button__icon"/>
                    <div className="private-realestate__selection__button__title">שותפים</div>
                </button>
                <button className="private-realestate__selection__button" onClick={(e)=>selectType(e,"מסחרי")}>
                    <img src="/svgs/business_realestate.svg" alt="business" className="private-realestate__selection__button__icon"/>
                    <div className="private-realestate__selection__button__title">מסחרי</div>
                </button>
            </div>
            </>}
        </div>
    )
}

export default PublishPrivateRealestatePartOne;