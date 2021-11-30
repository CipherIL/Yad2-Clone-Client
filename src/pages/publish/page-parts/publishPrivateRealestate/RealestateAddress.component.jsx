import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { typeofEstate, estateCondition } from "../../../../data/privateRealestatePublishFormData";
const RealestateAddress = ({state,setState,selected}) => {

    const getTitle = () => {

    }

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
                    <div className="form-field">
                        <label className="form-field__label">ישוב*</label>
                        <input type="text" className="form-field__input"/>
                    </div>
                    <div className="form-field">
                        <label className="form-field__label">רחוב*</label>
                        <input type="text" className="form-field__input"/>
                    </div>
                    <div className="form-field">
                        <label className="form-field__label">מס' בית</label>
                        <input type="text" className="form-field__input"/>
                    </div>
                    <div className="form-section">
                        <div className="form-field">
                            <label className="form-field__label">קומה*</label>
                            <input type="text" className="form-field__input"/>
                        </div>
                        <div className="form-field">
                            <label className="form-field__label">סה"כ קומות בבניין*</label>
                            <input type="text" className="form-field__input"/>
                        </div>
                        <div className="form-field checkbox">
                            <label className="form-field__label">על עמודים</label>
                            <input type="checkbox" className="form-field__checkbox"/>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default RealestateAddress;