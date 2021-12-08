import React, { useReducer } from "react";

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormFieldSingleInput from "../../../components/custom/FormFieldSingleInput.component";

// Reducer Imports
import { PPRFourthFormActionTypes } from "../../../types/publishPrivateRealestateFormAction.types";
import { PPRFourthFormAction } from "../../../actions/publishPrivateRealestateForm.actions";
import PPRFourthFormReducer, { PPR_FOURTH_FORM_INITIAL_STATE } from "../../../reducers/publishPrivateRealestate/PPRFourthForm.reducer";

const PublishPrivateRealestatePartFour = ({selected,completed,returnButton,reopen,submitFunction}) => {

    const [formState,dispatchForm] = useReducer(PPRFourthFormReducer,PPR_FOURTH_FORM_INITIAL_STATE);

    const handleInput = (actionType,value) => {
        dispatchForm(PPRFourthFormAction(actionType,value));
    }
    const handleSubmit = () => {
        if(Object.values(formState.isValid).some(val=>val===false)) {
            dispatchForm(PPRFourthFormAction(PPRFourthFormActionTypes.CHANGE_SHOW_ERROR_STATE));
        }
        else {
            submitFunction("CHANGE_FOURTH_FORM_VALUES",formState.values);
        }
    }
    return (
        <div className={"private-realestate__selection realestate-payment"+(completed?" completed":"")} onClick={reopen}>
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {completed?<FontAwesomeIcon icon={["fas","check"]}/>:"4"}</div>
                <div className="private-realestate__selection__title__text">תשלומים, תאריכים ועוד</div>
            </div>
            {completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            {selected && <>
            <div className="form-container">
                <FormFieldSingleInput
                inputType="number"
                labelText='מ"ר בנוי'
                placeHolder='כמה מ"ר יש בנכס'
                errorMessage={formState.showError.builtArea && formState.errorMessage.builtArea}
                updateFunction={(e)=>handleInput(PPRFourthFormActionTypes.CHANGE_BUILD_AREA_STATE,e.target.value)}
                />
                
                <FormFieldSingleInput
                inputType="number"
                labelText='גודל במ"ר סך הכל*'
                errorMessage={formState.showError.totalArea && formState.errorMessage.totalArea}
                updateFunction={(e)=>handleInput(PPRFourthFormActionTypes.CHANGE_TOTAL_AREA_STATE,e.target.value)}
                />

                <FormFieldSingleInput
                inputType="number"
                labelText='מחיר'
                placeHolder='סכום מינימלי 100,000₪'
                errorMessage={formState.showError.price && formState.errorMessage.price}
                updateFunction={(e)=>handleInput(PPRFourthFormActionTypes.CHANGE_PRICE_STATE,e.target.value)}
                />

                <FormFieldSingleInput
                labelText='תאריך כניסה*'
                inputType="date"
                errorMessage={formState.showError.entryDate && formState.errorMessage.entryDate}
                updateFunction={(e)=>handleInput(PPRFourthFormActionTypes.CHANGE_ENTRY_DATE_STATE,e.target.value)}
                isDisabled={formState.isDisabled.entryDate}
                />

                <div className="form-field check">
                    <div className="form-field__check-field">
                        <input type="checkbox" 
                        onChange={(e)=>handleInput(PPRFourthFormActionTypes.CHANGE_ENTRY_NOW_STATE,e.target.checked)}
                        checked={formState.values.entryNow}/>
                        <label>מיידי</label>
                    </div>
                    <div className="form-field__check-field">
                        <input type="checkbox" 
                        onChange={(e)=>handleInput(PPRFourthFormActionTypes.CHANGE_ENTRY_FLEXIBLE_STATE,e.target.checked)}
                        checked={formState.values.entryFlexible}/>
                        <label>גמיש</label>
                    </div>
                </div>
            </div>
            <div className="private-realestate__selection__buttons">
                    <button className="private-realestate__selection__button-return" onClick={returnButton}>חזרה</button>
                    <button className="private-realestate__selection__button-submit" onClick={handleSubmit}>להמשיך לשלב הבא</button>
            </div>
            </>}
        </div>
    )
}

export default PublishPrivateRealestatePartFour;