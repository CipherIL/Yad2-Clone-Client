import React, { useEffect, useReducer, useState, useRef } from "react";
import { nanoid } from "nanoid";

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormFieldSingleInput from "../../../components/custom/FormFieldSingleInput.component";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

//Data Imports
import { typeofEstate, estateCondition } from "../../../data/privateRealestatePublishFormData";

// Form Reducer Imports
import PPRSecondFormReducer, { PPR_SECOND_FORM_INITIAL_STATE } from "../../../reducers/publishPrivateRealestate/PPRSecondForm.reducer";
import { PPRSecondFormActionTypes } from "../../../types/publishPrivateRealestateFormAction.types";
import { PPRSecondFormAction } from "../../../actions/publishPrivateRealestateForm.actions";
import { getCitySuggestions, getStreetSuggestions } from "../../../server/publish.requests";

const PublishPrivateRealestatePartTwo = ({selected,completed,submitFunction,reopen,returnButton}) => {

    const [formState,dispatchForm] = useReducer(PPRSecondFormReducer,PPR_SECOND_FORM_INITIAL_STATE);
    const [showCitySuggestions,setShowCitySuggestions] = useState(false);
    const [citySuggestions,setCitySuggestions] = useState([]);
    const [showStreetSuggestions,setShowStreetSuggestions] = useState(false);
    const [streetSuggestions,setStreetSuggestions] = useState([]);
    
    //City Variables
    const [cityTimer,setCityTimer] = useState(null);
    const cityRef = useRef();
    useOnClickOutside(cityRef,()=>{
        setShowCitySuggestions(false);
        setCitySuggestions([]);
        if(!formState.isValid.city)
            handleCityInput("",PPRSecondFormActionTypes.CHANGE_CITY_STATE,false);
    })

    //Street Variables
    const [streetTimer,setStreetTimer] = useState(null);
    const streetRef = useRef();
    useOnClickOutside(streetRef,()=>{
        setShowStreetSuggestions(false);
        setStreetSuggestions([]);
        if(!formState.isValid.street)
            handleStreetInput("",PPRSecondFormActionTypes.CHANGE_STREET_STATE,false);
    })


    const handleInput = (e,actionType) => {
        const value = e.target.value;
        e.target.value = value;
        dispatchForm(PPRSecondFormAction(actionType,value));
    }
    const handleCheckbox = (e,actionType) => {
        const value = e.target.checked;
        dispatchForm(PPRSecondFormAction(actionType,value))
    }
    const handleNumberInput = (e,actionType) => {
        const value = e.target.value;
        if(value==="" || !isNaN(parseInt(value.at(-1)))){            
            e.target.value = value;
            dispatchForm(PPRSecondFormAction(actionType,value));
        }
        else {            
            if(value.length===1) e.target.value = "";
            else e.target.value = value.slice(0,-1);
        }
    }
    const handleCityInput = (value,actionType,isValid) => {
        dispatchForm(PPRSecondFormAction(actionType,value,isValid));
        if(!isValid) {
            setTimeout(()=>{
                if(value.length>=3) setShowCitySuggestions(true);
                else {
                    setShowCitySuggestions(false);
                    setCitySuggestions([]);
                }
            },1000)
        }
    }
    const handleStreetInput = (value,actionType,isValid) => {
        dispatchForm(PPRSecondFormAction(actionType,value,isValid));
        if(isValid) {
            setTimeout(()=>{
                if(value.length>=3) setShowStreetSuggestions(true);
                else {
                    setShowStreetSuggestions(false);
                    setStreetSuggestions([]);
                }
            })
        }
    }
    const handleSubmit = (e) => {
        e.stopPropagation();
        //if any field is invalid
        if(Object.keys(formState.isValid).some(key=>formState.isValid[key] === false))
            dispatchForm(PPRSecondFormAction(PPRSecondFormActionTypes.CHANGE_SHOW_ERROR_STATE))
        else {
            submitFunction("CHANGE_SECOND_FORM_VALUES",formState.values);
        }
    }
    const getSubtitle = () => {
        return `${formState.values.estateType} - ${formState.values.estateCondition} - ${formState.values.city} - ${formState.values.street} - ${formState.values.number}`
    }

    useEffect(()=>{
        clearTimeout(cityTimer);
        if(showCitySuggestions) {
            setCityTimer(setTimeout(()=>{   
                getCitySuggestions(formState.values.city)
                .then(res=>{
                    setCitySuggestions(res.data)
                })
                .catch(err=>{
                    setCitySuggestions([]);
                })
            },500))
        }
    },[formState.values.city])

    return (
        <div className={"private-realestate__selection realestate__address"+(completed?" completed":"")} onClick={reopen}>
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {completed?<FontAwesomeIcon icon={["fas","check"]}/>:"2"}</div>
                <div className="private-realestate__selection__title__text">כתובת הנכס</div>
                {completed && <span className="private-realestate__selection__subtitle">{getSubtitle()}</span>}
            </div>
            {completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            {selected && <>
                <div className="form-container">
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <div className="form-field">
                            <label className="form-field__label">סוג הנכס*</label>
                            <select className="form-field__select" value={formState.values.estateType} onChange={(e)=>{handleInput(e,PPRSecondFormActionTypes.CHANGE_ESTATE_TYPE_STATE)}}>
                                <option value="" disabled hidden>דירה או אולי פנטהאוז?</option>
                                {typeofEstate.map(type=>{
                                    return (
                                        <option value={type} key={nanoid()}>{type}</option>
                                    )
                                })}
                            </select>
                            {formState.showError.estateType && <span className="form-field__error">{formState.errorMessage.estateType}</span>}
                        </div>
                        <div className="form-field">
                            <label className="form-field__label">מצב הנכס*</label>
                            <select className="form-field__select" value={formState.values.estateCondition} onChange={(e)=>{handleInput(e,PPRSecondFormActionTypes.CHANGE_ESTATE_CONDITION_STATE)}}>
                                <option value="" disabled hidden>משופץ? חדש מקבלן?</option>
                                {estateCondition.map(type=>{
                                    return (
                                        <option value={type} key={nanoid()}>{type}</option>
                                    )
                                })}
                            </select>
                            {formState.showError.estateCondition && <span className="form-field__error">{formState.errorMessage.estateCondition}</span>}
                        </div>

                        <div className="form-field" ref={cityRef}>
                            <label className="form-field__label">ישוב*</label>
                            <div className="form-field__input">
                                <input type="text" 
                                className={`form-field__input__input ${(formState.showError.city && formState.errorMessage.city!=="" ? "error":"")}`}
                                onChange={(e)=>{handleCityInput(e.target.value,PPRSecondFormActionTypes.CHANGE_CITY_STATE,false)}}
                                value={formState.values.city}
                                placeholder="הכנסת שם ישוב"
                                />
                            </div>
                            {formState.showError.city && <span className="form-field__error">{formState.errorMessage.city}</span>}
                            {showCitySuggestions && citySuggestions.length>0 && <div className="form-field__suggestions">
                                {citySuggestions.map(city=>{
                                    return (
                                        <div className="form-field__suggestion" onClick={(e)=>{
                                            e.stopPropagation();
                                            handleCityInput(city.city,PPRSecondFormActionTypes.CHANGE_CITY_STATE,true);
                                            setShowCitySuggestions(false);
                                        }} key={nanoid()}>
                                            {city.city}
                                        </div>
                                    )
                                })}    
                            </div>}
                        </div>
                        {/* FIXME: make sure this input works properly */}
                        <div className="form-field" ref={cityRef}>
                            <label className="form-field__label">רחוב*</label>
                            <div className="form-field__input">
                                <input type="text" 
                                className={`form-field__input__input ${(formState.showError.city && formState.errorMessage.city!=="" ? "error":"")}`}
                                onChange={(e)=>{handleCityInput(e.target.value,PPRSecondFormActionTypes.CHANGE_CITY_STATE,false)}}
                                value={formState.values.city}
                                placeholder="הכנסת שם רחוב"
                                />
                            </div>
                            {formState.showError.city && <span className="form-field__error">{formState.errorMessage.city}</span>}
                            {showCitySuggestions && citySuggestions.length>0 && <div className="form-field__suggestions">
                                {citySuggestions.map(street=>{
                                    return (
                                        <div className="form-field__suggestion" onClick={(e)=>{
                                            e.stopPropagation();
                                            handleStreetInput(street.street,PPRSecondFormActionTypes.CHANGE_STREET_STATE,true);
                                            setShowStreetSuggestions(false);
                                        }} key={nanoid()}>
                                            {street.street}
                                        </div>
                                    )
                                })}    
                            </div>}
                        </div>

                        <FormFieldSingleInput 
                        labelText="רחוב*" 
                        placeHolder="הכנסת שם רחוב" 
                        isDisabled={formState.disabled.street} 
                        updateFunction={(e)=>handleInput(e,PPRSecondFormActionTypes.CHANGE_STREET_STATE)}
                        defaultValue={formState.values.street}
                        errorMessage = {formState.showError.street && formState.errorMessage.street}/>
                        
                        <FormFieldSingleInput 
                        labelText="מס' בית" 
                        isDisabled={formState.disabled.number} 
                        updateFunction={(e)=>handleNumberInput(e,PPRSecondFormActionTypes.CHANGE_NUMBER_STATE)}
                        defaultValue={formState.values.number}
                        errorMessage = {formState.showError.number && formState.errorMessage.number}/>
                        
                        <div className="form-section">
                            {formState.showFloorsQuery && <FormFieldSingleInput 
                            labelText="קומה*" 
                            placeHolder={"הכנסת מס' קומה"} 
                            isDisabled={formState.disabled.floor} 
                            updateFunction={(e)=>handleNumberInput(e,PPRSecondFormActionTypes.CHANGE_FLOOR_STATE)} 
                            defaultValue={formState.values.floor}
                            errorMessage = {formState.showError.floor && formState.errorMessage.floor}/>}

                            {formState.showTotalFloorsQuery && <FormFieldSingleInput 
                            labelText='סה"כ קומות בבניין*' 
                            placeHolder={'הכנסת סה"כ קומות'} 
                            isDisabled={formState.disabled.totalFloors} 
                            updateFunction={(e)=>handleNumberInput(e,PPRSecondFormActionTypes.CHANGE_TOTAL_FLOORS_STATE)}
                            defaultValue={formState.values.totalFloors}
                            errorMessage = {formState.showError.totalFloors && formState.errorMessage.totalFloors}/>}

                            {formState.showOnPillarsQuery && <FormFieldSingleInput 
                            labelText="על עמודים" 
                            inputType="checkbox" 
                            customClass=" checkbox" 
                            isDisabled={formState.disabled.onPillars} 
                            updateFunction={(e)=>handleCheckbox(e,PPRSecondFormActionTypes.CHANGE_ON_PILLARS_STATE)}
                            defaultChecked={formState.values.onPillars}/>}
                        </div>

                        <FormFieldSingleInput 
                        labelText='אני רוצה לקבל הודעות עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן'
                        inputType="checkbox" customClass=" checkbox" 
                        isDisabled={formState.disabled.addToMailingList} 
                        updateFunction={(e)=>handleCheckbox(e,PPRSecondFormActionTypes.CHANGE_MAILING_LIST_STATE)}
                        defaultChecked={formState.values.addToMailingList}/>

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