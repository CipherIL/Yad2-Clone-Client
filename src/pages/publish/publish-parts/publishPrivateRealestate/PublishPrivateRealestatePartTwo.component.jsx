import React from "react";

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormFieldSingleInput from "../../../../components/custom/FormFieldSingleInput.component";

//Data Imports
import { typeofEstate, estateCondition } from "../../../../data/privateRealestatePublishFormData";

// Form Reducer Imports
import { PPRSecondFormActionTypes } from "../../../../types/publishPrivateRealestateFormAction.types";
import { PPRSecondFormAction } from "../../../../actions/publishPrivateRealestateForm.actions";
import { nanoid } from "nanoid";

const PublishPrivateRealestatePartTwo = ({state,setState,selected,returnButton}) => {

    const handleInput = (e,actionType) => {
        const value = e.target.value;
        e.target.value = value;
        setState(PPRSecondFormAction(actionType,value));
    }
    const handleCheckbox = (e,actionType) => {
        const value = e.target.checked;
        setState(PPRSecondFormAction(actionType,value))
    }
    const handleNumberInput = (e,actionType) => {
        const value = e.target.value;
        if(value==="" || !isNaN(parseInt(value.at(-1)))){            
            e.target.value = value;
            setState(PPRSecondFormAction(actionType,value));
        }
        else {            
            if(value.length===1) e.target.value = "";
            else e.target.value = value.slice(0,-1);
        }
    }
    const handleSubmit = (e) => {
        e.stopPropagation();
        //if any field is invalid
        if(Object.keys(state.isValid).some(key=>state.isValid[key] === false))
            setState(PPRSecondFormAction(PPRSecondFormActionTypes.CHANGE_SHOW_ERROR_STATE))
        else {
            setState(PPRSecondFormAction(PPRSecondFormActionTypes.CHANGE_COMPLETED_STATE,true))
        }
    }
    const reopen = () => {
        setState(PPRSecondFormAction(PPRSecondFormActionTypes.CHANGE_COMPLETED_STATE,false))
    }
    const getSubtitle = () => {
        return `${state.values.estateType} - ${state.values.estateCondition} - ${state.values.city} - ${state.values.street} - ${state.values.number}`
    }

    return (
        <div className={"private-realestate__selection realestate__address"+(state.completed?" completed":"")} onClick={reopen}>
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {state.completed?<FontAwesomeIcon icon={["fas","check"]}/>:"2"}</div>
                <div className="private-realestate__selection__title__text">כתובת הנכס</div>
                {state.completed && <span className="private-realestate__selection__subtitle">{getSubtitle()}</span>}
            </div>
            {state.completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            {selected && <>
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
                            {state.showError.estateType && <span className="form-field__error">{state.errorMessage.estateType}</span>}
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
                            {state.showError.estateCondition && <span className="form-field__error">{state.errorMessage.estateCondition}</span>}
                        </div>

                        <FormFieldSingleInput 
                        labelText="ישוב*" 
                        placeHolder="הכנסת שם ישוב" 
                        updateFunction={(e)=>handleInput(e,PPRSecondFormActionTypes.CHANGE_CITY_STATE)}
                        defaultValue={state.values.city}
                        errorMessage = {state.showError.city && state.errorMessage.city}
                        />

                        <FormFieldSingleInput 
                        labelText="רחוב*" 
                        placeHolder="הכנסת שם רחוב" 
                        isDisabled={state.disabled.street} 
                        updateFunction={(e)=>handleInput(e,PPRSecondFormActionTypes.CHANGE_STREET_STATE)}
                        defaultValue={state.values.street}
                        errorMessage = {state.showError.street && state.errorMessage.street}/>
                        
                        <FormFieldSingleInput 
                        labelText="מס' בית" 
                        isDisabled={state.disabled.number} 
                        updateFunction={(e)=>handleNumberInput(e,PPRSecondFormActionTypes.CHANGE_NUMBER_STATE)}
                        defaultValue={state.values.number}
                        errorMessage = {state.showError.number && state.errorMessage.number}/>
                        
                        <div className="form-section">
                            {state.showFloorsQuery && <FormFieldSingleInput 
                            labelText="קומה*" 
                            placeHolder={"הכנסת מס' קומה"} 
                            isDisabled={state.disabled.floor} 
                            updateFunction={(e)=>handleNumberInput(e,PPRSecondFormActionTypes.CHANGE_FLOOR_STATE)} 
                            defaultValue={state.values.floor}
                            errorMessage = {state.showError.floor && state.errorMessage.floor}/>}

                            {state.showTotalFloorsQuery && <FormFieldSingleInput 
                            labelText='סה"כ קומות בבניין*' 
                            placeHolder={'הכנסת סה"כ קומות'} 
                            isDisabled={state.disabled.totalFloors} 
                            updateFunction={(e)=>handleNumberInput(e,PPRSecondFormActionTypes.CHANGE_TOTAL_FLOORS_STATE)}
                            defaultValue={state.values.totalFloors}
                            errorMessage = {state.showError.totalFloors && state.errorMessage.totalFloors}/>}

                            {state.showOnPillarsQuery && <FormFieldSingleInput 
                            labelText="על עמודים" 
                            inputType="checkbox" 
                            customClass=" checkbox" 
                            isDisabled={state.disabled.onPillars} 
                            updateFunction={(e)=>handleCheckbox(e,PPRSecondFormActionTypes.CHANGE_ON_PILLARS_STATE)}
                            defaultChecked={state.values.onPillars}/>}
                        </div>

                        <FormFieldSingleInput 
                        labelText='אני רוצה לקבל הודעות עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן'
                        inputType="checkbox" customClass=" checkbox" 
                        isDisabled={state.disabled.addToMailingList} 
                        updateFunction={(e)=>handleCheckbox(e,PPRSecondFormActionTypes.CHANGE_MAILING_LIST_STATE)}
                        defaultChecked={state.values.addToMailingList}/>

                    </form>
                </div>
                <div className="private-realestate__selection__buttons">
                    <button className="private-realestate__selection__button-return" onClick={returnButton}>חזרה</button>
                    <button className="private-realestate__selection__button-submit" onClick={handleSubmit}>להמשיך לשלב הבא</button>
                </div>
                </>
            }

        </div>
    )
}

export default PublishPrivateRealestatePartTwo;