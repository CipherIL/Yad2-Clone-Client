import React, {useReducer} from "react";
import { nanoid } from "nanoid";
// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Data Imports
import { numberOfRooms, estateFeatures } from '../../../../data/privateRealestatePublishFormData';

// Reducer Imports
import { PPRThirdFormActionTypes } from "../../../../types/publishPrivateRealestateFormAction.types";
import { PPRThirdFormAction } from "../../../../actions/publishPrivateRealestateForm.actions";
import PPRThirdFormReducer, { PPR_THIRD_FORM_INITIAL_STATE } from "../../../../reducers/publishPrivateRealestate/PPRThirdForm.reducer";

const PublishPrivateRealestatePartThree = ({selected,returnButton}) => {
    const [formState,dispatchform] = useReducer(PPRThirdFormReducer,PPR_THIRD_FORM_INITIAL_STATE);

    const handleSubmit = () => {
        console.log(formState)
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

    return (
        <div className="private-realestate__selection realestate__about">
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {formState.completed?<FontAwesomeIcon icon={["fas","check"]}/>:"3"}</div>
                <div className="private-realestate__selection__title__text">על הנכס</div>
            </div>
            {formState.completed &&
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
                            {formState.showError.estateCondition && <span className="form-field__error">{formState.errorMessage.estateCondition}</span>}
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