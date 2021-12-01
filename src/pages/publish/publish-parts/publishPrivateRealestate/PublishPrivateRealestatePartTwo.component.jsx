import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { typeofEstate, estateCondition } from "../../../../data/privateRealestatePublishFormData";
import FormFieldSingleInput from "../../../../components/custom/FormFieldSingleInput.component";
const PublishPrivateRealestatePartTwo = ({state,setState,selected}) => {

    return (
        <div className="private-realestate__selection realestate__address">
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {state.completed?<FontAwesomeIcon icon={["fas","check"]}/>:"2"}</div>
                <div className="private-realestate__selection__title__text">כתובת הנכס</div>
            </div>
            {state.completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            {selected && 
                <div className="form-container">
                    <form>
                        <div className="form-field">
                            <label className="form-field__label">סוג הנכס*</label>
                            <select className="form-field__select">
                                <option value="" disabled selected hidden>דירה או אולי פנטהאוז?</option>
                                {typeofEstate.map(type=>{
                                    return (
                                        <option value={type}>{type}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-field">
                            <label className="form-field__label">מצב הנכס*</label>
                            <select className="form-field__select">
                                <option value="" disabled selected hidden>משופץ? חדש מקבלן?</option>
                                {estateCondition.map(type=>{
                                    return (
                                        <option value={type}>{type}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <FormFieldSingleInput labelText="ישוב*" placeHolder="הכנסת שם ישוב"/>
                        <FormFieldSingleInput labelText="רחוב*" placeHolder="הכנסת שם רחוב"/>
                        <FormFieldSingleInput labelText="מס' בית"/>
                        <div className="form-section">
                            <FormFieldSingleInput labelText="קומה*"/>
                            <FormFieldSingleInput labelText='סה"כ קומות בבניין*'/>
                            <FormFieldSingleInput labelText="על עמודים" inputType="checkbox" customClass=" checkbox"/>
                        </div>
                        <FormFieldSingleInput labelText='אני רוצה לקבל הודעות עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן' inputType="checkbox" customClass=" checkbox"/>
                    </form>
                </div>
            }
            <div className="private-realestate__selection__buttons">
                
            </div>

        </div>
    )
}

export default PublishPrivateRealestatePartTwo;