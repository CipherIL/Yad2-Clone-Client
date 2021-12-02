import React from "react";
import { nanoid } from "nanoid";
// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Data Imports
import { numberOfRooms, estateFeatures } from '../../../../data/privateRealestatePublishFormData';

// Reducer Imports
import { PPRSecondFormActionTypes, PPRThirdFormActionTypes } from "../../../../types/publishPrivateRealestateFormAction.types";
import { PPRThirdFormAction } from "../../../../actions/publishPrivateRealestateForm.actions";

const PublishPrivateRealestatePartThree = ({state,setState,selected,returnButton}) => {

    const handleSubmit = () => {

    }
    const handleInput = (e,actionType) => {
        const value = e.target.children[0].value;
        setState(PPRThirdFormAction(actionType,value))
    }
    const handleCheckboxInput = (e,key,actionType) => {
        const value = e.target.children[0].checked;
        setState(PPRThirdFormAction(actionType,!value,key))
    }
    const handleTextareaInput = (e,actionType) => {
        const value = e.target.value;
        setState(PPRThirdFormAction(actionType,value))
    }

    return (
        <div className="private-realestate__selection realestate__about">
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {state.completed?<FontAwesomeIcon icon={["fas","check"]}/>:"3"}</div>
                <div className="private-realestate__selection__title__text">על הנכס</div>
            </div>
            {state.completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            {selected && <>
                <div className="form-container">
                    <form>
                        <div className="form-field select">
                            <label className="form-field__label">מספר חדרים*</label>
                            <select className="form-field__select" value={state.values.rooms} onChange={(e)=>{handleInput(e,PPRThirdFormActionTypes.CHANGE_ROOMS_STATE)}}>
                                <option value="" disabled hidden>בחירת מספר חדרים</option>
                                {numberOfRooms.map(type=>{
                                    return (
                                        <option value={type} key={nanoid()}>{type}</option>
                                    )
                                })}
                            </select>
                            {state.showError.estateCondition && <span className="form-field__error">{state.errorMessage.estateCondition}</span>}
                        </div>
                        <div className="form-field radio">
                            <label className="form-field__label">חניה</label>
                            <div className="form-field__radio-options">
                                <div className={"form-field__radio-option"+(state.values.parkingSpots==="ללא"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_PARKING_STATE)}>
                                    <input type="radio" name="parking" value="ללא" checked={state.values.parkingSpots==="ללא"} readOnly/>
                                    <label>ללא</label>
                                </div>
                                <div className={"form-field__radio-option"+(state.values.parkingSpots==="1"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_PARKING_STATE)}>
                                    <input type="radio" name="parking" value="1" checked={state.values.parkingSpots==="1"} readOnly/>
                                    <label>1</label>
                                </div>
                                <div className={"form-field__radio-option"+(state.values.parkingSpots==="2"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_PARKING_STATE)}>
                                    <input type="radio" name="parking" value="2" checked={state.values.parkingSpots==="2"} readOnly/>
                                    <label>2</label>
                                </div>
                                <div className={"form-field__radio-option"+(state.values.parkingSpots==="3"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_PARKING_STATE)}>
                                    <input type="radio" name="parking" value="3" checked={state.values.parkingSpots==="3"} readOnly/>
                                    <label>3</label>
                                </div>                                
                            </div>                        
                        </div>
                        <div className="form-field radio">
                            <label className="form-field__label">מרפסת</label>
                            <div className="form-field__radio-options">
                                <div className={"form-field__radio-option"+(state.values.balconies==="ללא"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_BALCONIES_STATE)}>
                                    <input type="radio" name="balconies" value="ללא" checked={state.values.balconies==="ללא"} readOnly/>
                                    <label>ללא</label>
                                </div>
                                <div className={"form-field__radio-option"+(state.values.balconies==="1"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_BALCONIES_STATE)}>
                                    <input type="radio" name="balconies" value="1" checked={state.values.balconies==="1"} readOnly/>
                                    <label>1</label>
                                </div>
                                <div className={"form-field__radio-option"+(state.values.balconies==="2"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_BALCONIES_STATE)}>
                                    <input type="radio" name="balconies" value="2" checked={state.values.balconies==="2"} readOnly/>
                                    <label>2</label>
                                </div>
                                <div className={"form-field__radio-option"+(state.values.balconies==="3"?" selected":"")}
                                onClick={(e)=>handleInput(e,PPRThirdFormActionTypes.CHANGE_BALCONIES_STATE)}>
                                    <input type="radio" name="balconies" value="3" checked={state.values.balconies==="3"} readOnly/>
                                    <label>3</label>
                                </div>                                
                            </div>   
                        </div>
                        <div className="form__section-name">מאפייני הנכס</div>
                        <div className="form-field features">
                            {estateFeatures.map(feature=>{
                                return (
                                    <div className={"feature-container"+(state.values.features[feature.text]?" checked":"")} key={nanoid()}
                                    onClick={(e)=>handleCheckboxInput(e,feature.text,PPRThirdFormActionTypes.CHANGE_FEATURES_STATE)}>
                                        <input readOnly type="checkbox" checked={state.values.features[feature.text]}/>
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
                                <div className="form-field__title__limit">{state.values.description.length+"/400"}</div>
                            </div>
                            {/* FIXME: fix this input */}
                            <input type="textarea" maxLength="400"
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