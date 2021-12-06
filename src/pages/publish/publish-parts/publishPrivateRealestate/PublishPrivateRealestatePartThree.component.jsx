import React, {useEffect, useReducer, useState} from "react";
import { nanoid } from "nanoid";
// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Data Imports
import { numberOfRooms, estateFeatures } from '../../../../data/privateRealestatePublishFormData';

// Reducer Imports
import { PPRSecondFormActionTypes, PPRThirdFormActionTypes } from "../../../../types/publishPrivateRealestateFormAction.types";
import { PPRThirdFormAction } from "../../../../actions/publishPrivateRealestateForm.actions";
import PPRThirdFormReducer, { PPR_THIRD_FORM_INITIAL_STATE } from "../../../../reducers/publishPrivateRealestate/PPRThirdForm.reducer";

const PublishPrivateRealestatePartThree = ({selected,returnButton,completed,reopen,submitFunction,getDefaultDescription}) => {
    
    const [formState,dispatchform] = useReducer(PPRThirdFormReducer,PPR_THIRD_FORM_INITIAL_STATE);
    const [emptyDescriptionModal,setEmptyDescriptionModal] = useState(false);
    const [emptyDescriptionModalText,setEmptyDescriptionModalText] = useState(getDefaultDescription());

    useEffect(()=>{
        setEmptyDescriptionModalText(getDefaultDescription())
    },[selected,getDefaultDescription])

    const handleSubmit = (e) => {
        e.stopPropagation();
        setEmptyDescriptionModal(false)
        if(!formState.isValid.rooms)
            return dispatchform(PPRThirdFormAction(PPRSecondFormActionTypes.CHANGE_SHOW_ERROR_STATE));
        
        if(!formState.isValid.description){
            dispatchform(PPRThirdFormAction(PPRThirdFormActionTypes.CHANGE_DESCRIPTION_STATE,emptyDescriptionModalText));
            setEmptyDescriptionModal(true);
            console.log(emptyDescriptionModalText)
        }
        else {
            submitFunction("CHANGE_THIRD_FORM_VALUES",formState.values);
        }
    }
    const handleInput = (e,actionType) => {
        const value = e.target.children[0].value;
        dispatchform(PPRThirdFormAction(actionType,value))
    }
    const handleCheckboxInput = (e,key,actionType) => {
        const value = e.target.children[0].checked;
        dispatchform(PPRThirdFormAction(actionType,!value,key))
    }
    const handleTextareaInput = (e,actionType) => {
        const value = e.target.value;
        dispatchform(PPRThirdFormAction(actionType,value))
    }
    const handleSelectInput = (e,actionType) => {
        const value = e.target.value
        dispatchform(PPRThirdFormAction(actionType,value))
    }
    const getSubtitle = () => {
        return `${formState.values.rooms} חדרים`
    }
    return (
        <div className={"private-realestate__selection realestate__about"+(completed?" completed":"")} onClick={reopen}>
            <div className={"private-realestate__selection__form-modal"+(emptyDescriptionModal?" show":"")} onClick={(e)=>{
                handleSubmit(e);
            }}>
                <div className="private-realestate__selection__form-modal__content">
                    <span className="private-realestate__selection__form-modal__content__close" onClick={(e)=>{
                            handleSubmit(e);
                    }}>&#10005;</span>
                    <span className="private-realestate__selection__form-modal__content__title">
                        בטוח שיש עוד מידע שכדאי שהגולשים ידעו   
                    </span>
                    <span className="private-realestate__selection__form-modal__content__subtitle">
                        אנחנו הוספנו את כל מה שידוע לנו לגבי הנכס.
                        <br/>
                        לך נשאר להמשיך עם היתרונות שמוכרים רק לך.
                    </span>
                    <div className="private-realestate__selection__form-modal__content__input">
                        <div className="private-realestate__selection__form-modal__content__input__title">
                            <div className="private-realestate__selection__form-modal__content__input__title__text">פרוט הנכס</div>
                            <div className="private-realestate__selection__form-modal__content__input__title__data">
                                {`${emptyDescriptionModalText.length}/400`}</div>
                        </div>
                        <textarea cols="30" rows="10" maxLength="400" defaultValue={formState.values.description} onChange={(e)=>{setEmptyDescriptionModalText(e.target.value)}}></textarea>
                    </div>
                    <div className="private-realestate__selection__form-modal__content__buttons">
                        <button className="private-realestate__selection__form-modal__content__buttons__submit" onClick={(e)=>{
                            dispatchform(PPRThirdFormAction("CHANGE_DESCRIPTION_STATE",emptyDescriptionModalText));
                            handleSubmit(e);
                        }}>עדכנתי, בואו נמשיך</button>
                        <button className="private-realestate__selection__form-modal__content__buttons__continue" onClick={(e)=>{
                            handleSubmit(e);
                        }}>לא כרגע</button>
                    </div>
                </div>
            </div>
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {completed?<FontAwesomeIcon icon={["fas","check"]}/>:"3"}</div>
                <div className="private-realestate__selection__title__text">על הנכס</div>
                {completed && <span className="private-realestate__selection__subtitle">{getSubtitle()}</span>}
            </div>
            {completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            {selected && <>
                <div className="form-container">
                    <form>
                        <div className="form-field select">
                            <label className="form-field__label">מספר חדרים*</label>
                            <select className="form-field__select" value={formState.values.rooms} onChange={(e)=>{handleSelectInput(e,PPRThirdFormActionTypes.CHANGE_ROOMS_STATE)}}>
                                <option value="" disabled hidden>בחירת מספר חדרים</option>
                                {numberOfRooms.map(type=>{
                                    return (
                                        <option value={type} key={nanoid()}>{type}</option>
                                    )
                                })}
                            </select>
                            {formState.showError.rooms && <span className="form-field__error">{formState.errorMessage.rooms}</span>}
                        </div>
                        <div className="form-field radio">
                            <label className="form-field__label">חניה</label>
                            <div className="form-field__radio-options">
                                <div className={"form-field__radio-option"+(formState.values.parkingSpots==="ללא"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_PARKING_STATE)}>
                                    <input type="radio" name="parking" value="ללא" checked={formState.values.parkingSpots==="ללא"} readOnly/>
                                    <label>ללא</label>
                                </div>
                                <div className={"form-field__radio-option"+(formState.values.parkingSpots==="1"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_PARKING_STATE)}>
                                    <input type="radio" name="parking" value="1" checked={formState.values.parkingSpots==="1"} readOnly/>
                                    <label>1</label>
                                </div>
                                <div className={"form-field__radio-option"+(formState.values.parkingSpots==="2"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_PARKING_STATE)}>
                                    <input type="radio" name="parking" value="2" checked={formState.values.parkingSpots==="2"} readOnly/>
                                    <label>2</label>
                                </div>
                                <div className={"form-field__radio-option"+(formState.values.parkingSpots==="3"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_PARKING_STATE)}>
                                    <input type="radio" name="parking" value="3" checked={formState.values.parkingSpots==="3"} readOnly/>
                                    <label>3</label>
                                </div>                                
                            </div>                        
                        </div>
                        <div className="form-field radio">
                            <label className="form-field__label">מרפסת</label>
                            <div className="form-field__radio-options">
                                <div className={"form-field__radio-option"+(formState.values.balconies==="ללא"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_BALCONIES_STATE)}>
                                    <input type="radio" name="balconies" value="ללא" checked={formState.values.balconies==="ללא"} readOnly/>
                                    <label>ללא</label>
                                </div>
                                <div className={"form-field__radio-option"+(formState.values.balconies==="1"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_BALCONIES_STATE)}>
                                    <input type="radio" name="balconies" value="1" checked={formState.values.balconies==="1"} readOnly/>
                                    <label>1</label>
                                </div>
                                <div className={"form-field__radio-option"+(formState.values.balconies==="2"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_BALCONIES_STATE)}>
                                    <input type="radio" name="balconies" value="2" checked={formState.values.balconies==="2"} readOnly/>
                                    <label>2</label>
                                </div>
                                <div className={"form-field__radio-option"+(formState.values.balconies==="3"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_BALCONIES_STATE)}>
                                    <input type="radio" name="balconies" value="3" checked={formState.values.balconies==="3"} readOnly/>
                                    <label>3</label>
                                </div>                                
                            </div>   
                        </div>
                        <div className="form__section-name">מאפייני הנכס</div>
                        <div className="form-field features">
                            {estateFeatures.map(feature=>{
                                return (
                                    <div className={"feature-container"+(formState.values.features[feature.text]?" checked":"")} key={nanoid()}
                                    onClick={(e)=>handleCheckboxInput(e,feature.text,PPRThirdFormActionTypes.CHANGE_FEATURES_STATE)}>
                                        <input readOnly type="checkbox" checked={formState.values.features[feature.text]}/>
                                        <FontAwesomeIcon icon={feature.logo}/>
                                        <label>{feature.text}</label>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="form__section-name">מה חשוב לך שידעו על הנכס?</div>
                        <div className="form-field text-area">
                            <div className="form-field__title">
                                <div className="form-field__title__label">פרוט הנכס</div>
                                <div className="form-field__title__limit">{formState.values.description.length+"/400"}</div>
                            </div>
                            <textarea maxLength="400" defaultValue={formState.values.description}
                            onChange={(e)=>handleTextareaInput(e,PPRThirdFormActionTypes.CHANGE_DESCRIPTION_STATE)}
                            placeholder={"זה המקום לתאר את הפרטים הבולטים, למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'"}/>
                        </div>
                    </form>
                </div>
            <div className="private-realestate__selection__buttons">
                    <button className="private-realestate__selection__button-return" onClick={returnButton}>חזרה</button>
                    <button className="private-realestate__selection__button-submit" onClick={handleSubmit}>להמשיך לשלב הבא</button>
            </div>
            </>}
        </div>

        
    )
}

export default PublishPrivateRealestatePartThree;