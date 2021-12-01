import React from "react";

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormFieldSingleInput from "../../../../components/custom/FormFieldSingleInput.component";

//Data Imports
import { typeofEstate, estateCondition } from "../../../../data/privateRealestatePublishFormData";

// Form Reducer Imports
import { PPRSecondFormActionTypes } from "../../../../types/publishPrivateRealestateFormAction.types";
import { PPRSeconFormAction } from "../../../../actions/publishPrivateRealestateForm.actions";
import { nanoid } from "nanoid";

const PublishPrivateRealestatePartTwo = ({state,setState,selected}) => {

    const handleInput = (e,actionType) => {
        const value = e.target.value;
        e.target.value = value;
        setState(PPRSeconFormAction(actionType,value));
    }
    const handleCheckbox = (e,actionType) => {
        const value = e.target.checked;
        setState(PPRSeconFormAction(actionType,value))
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
            {selected && 
                <div className="form-container">
                    <form>
                        <div className="form-field">
                            <label className="form-field__label">סוג הנכס*</label>
                            <select className="form-field__select" value={state.values.estateType} onChange={(e)=>{handleInput(e,PPRSecondFormActionTypes.CHANGE_ESTATE_TYPE_STATE)}}>
                                <option value="" disabled hidden>דירה או אולי פנטהאוז?</option>
                                {typeofEstate.map(type=>{
                                    return (
                                        <option value={type} key={nanoid()}>{type}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-field">
                            <label className="form-field__label">מצב הנכס*</label>
                            <select className="form-field__select" value={state.values.estateCondition} onChange={(e)=>{handleInput(e,PPRSecondFormActionTypes.CHANGE_ESTATE_CONDITION_STATE)}}>
                                <option value="" disabled hidden>משופץ? חדש מקבלן?</option>
                                {estateCondition.map(type=>{
                                    return (
                                        <option value={type} key={nanoid()}>{type}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <FormFieldSingleInput labelText="ישוב*" placeHolder="הכנסת שם ישוב" updateFunction={(e)=>handleInput(e,PPRSecondFormActionTypes.CHANGE_CITY_STATE)}/>
                        <FormFieldSingleInput labelText="רחוב*" placeHolder="הכנסת שם רחוב" isDisabled={state.disabled.street} updateFunction={(e)=>handleInput(e,PPRSecondFormActionTypes.CHANGE_STREET_STATE)}/>
                        <FormFieldSingleInput labelText="מס' בית" isDisabled={state.disabled.number} updateFunction={(e)=>handleInput(e,PPRSecondFormActionTypes.CHANGE_NUMBER_STATE)}/>
                        <div className="form-section">
                            {state.showFloorsQuery && <FormFieldSingleInput labelText="קומה*" isDisabled={state.disabled.floor} updateFunction={(e)=>handleInput(e,PPRSecondFormActionTypes.CHANGE_FLOOR_STATE)} customValue={state.values.floor}/>}
                            {state.showTotalFloorsQuery && <FormFieldSingleInput labelText='סה"כ קומות בבניין*' isDisabled={state.disabled.totalFloors} updateFunction={(e)=>handleInput(e,PPRSecondFormActionTypes.CHANGE_TOTAL_FLOORS_STATE)}/>}
                            {state.showOnPillarsQuery && <FormFieldSingleInput labelText="על עמודים" inputType="checkbox" customClass=" checkbox" isDisabled={state.disabled.onPillars} updateFunction={(e)=>handleCheckbox(e,PPRSecondFormActionTypes.CHANGE_ON_PILLARS_STATE)}/>}
                        </div>
                        <FormFieldSingleInput labelText='אני רוצה לקבל הודעות עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן'
                         inputType="checkbox" customClass=" checkbox" isDisabled={state.disabled.addToMailingList} updateFunction={(e)=>handleCheckbox(e,PPRSecondFormActionTypes.CHANGE_MAILING_LIST_STATE)}/>
                    </form>
                </div>
            }
            <div className="private-realestate__selection__buttons">
                
            </div>

        </div>
    )
}

export default PublishPrivateRealestatePartTwo;