import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublishPrivateRealestatePartOne = ({state,setState}) => {

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
        setState({completed:true,value:type})
    }

    const reopen = () => {
        setState({completed:false,value:state.value})
    }

    return (
        <div className={"private-realestate__selection realestate__type"+(state.completed?" completed":"")} onClick={reopen}>
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(!state.completed?" selected":"")}>
                    {state.completed?<FontAwesomeIcon icon={["fas","check"]}/>:"1"}</div>
                <div className="private-realestate__selection__title__text">
                    {state.completed && getTitle(state.value)}
                    {!state.completed && "באיזו קטגוריה נפרסם היום?"}
                </div>
            </div>
            {state.completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            { !state.completed && <>
            <div className="private-realestate__selection__selections">
                <button className="private-realestate__selection__button" onClick={(e)=>selectType(e,"מכירה")}>
                    <img src="/svgs/sale_realestate.svg" alt="sale" className="private-realestate__selection__button__icon"/>
                    <div className="private-realestate__selection__button__title">מכירה</div>
                </button>
                <button className="private-realestate__selection__button" onClick={(e)=>selectType(e,"השכרה")}>
                    <img src="/svgs/renting_realestate.svg" alt="sale" className="private-realestate__selection__button__icon"/>
                    <div className="private-realestate__selection__button__title">השכרה</div>
                </button>
                <button className="private-realestate__selection__button" onClick={(e)=>selectType(e,"שותפים")}>
                    <img src="/svgs/partners_realestate.svg" alt="sale" className="private-realestate__selection__button__icon"/>
                    <div className="private-realestate__selection__button__title">שותפים</div>
                </button>
                <button className="private-realestate__selection__button" onClick={(e)=>selectType(e,"מסחרי")}>
                    <img src="/svgs/business_realestate.svg" alt="sale" className="private-realestate__selection__button__icon"/>
                    <div className="private-realestate__selection__button__title">מסחרי</div>
                </button>
            </div>
            </>}
        </div>
    )
}

export default PublishPrivateRealestatePartOne;