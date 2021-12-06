import React, { useContext, useEffect, useReducer } from "react";
import {UserContext} from '../../../../contexts/User.context';

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormFieldSingleInput from "../../../../components/custom/FormFieldSingleInput.component";

//Reducer Imports
import PPRSixthFormReducer, {PPR_SIXTH_FROM_INITIAL_STATE} from "../../../../reducers/publishPrivateRealestate/PPRSixthForm.reducer";
import { PPRSixthFormActionTypes } from "../../../../types/publishPrivateRealestateFormAction.types";
import { PPRSixthFormAction } from "../../../../actions/publishPrivateRealestateForm.actions";

const PublishPrivateRealestatePartSix = ({selected,completed,returnButton,reopen,submitFunction}) => {
    
    const {user} = useContext(UserContext)
    const [formState,dispatchForm] = useReducer(PPRSixthFormReducer,PPR_SIXTH_FROM_INITIAL_STATE);

    useEffect(()=>{
        dispatchForm(PPRSixthFormAction(PPRSixthFormActionTypes.CHANGE_CONTACT_NAME_STATE,user.name));
        dispatchForm(PPRSixthFormAction(PPRSixthFormActionTypes.CHANGE_CONTACT_CELLPHONE_STATE,user.cellphone));
        dispatchForm(PPRSixthFormAction(PPRSixthFormActionTypes.CHANGE_CONTACT_EMAIL_STATE,user.email));
    },[user])
    const handleSubmit = () => {
        if(Object.values(formState.isValid).some(val=>val===false))
            dispatchForm(PPRSixthFormAction(PPRSixthFormActionTypes.CHANGE_SHOW_ERROR_STATE));
        else {
            console.log(formState)
        }
    }
    
    return (
        <div className={"private-realestate__selection realestate__contact"+(completed?" completed":"")} onClick={reopen}>
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {completed?<FontAwesomeIcon icon={["fas","check"]}/>:"6"}</div>
                <div className="private-realestate__selection__title__text">פרטים ליצירת קשר</div>
            </div>
            {completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            {selected && <>
            <span>רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים</span>
            <div className="form-container">
                <form>
                    <FormFieldSingleInput
                    labelText="שם איש קשר*"
                    defaultValue={formState.values.contactName}
                    />

                    <FormFieldSingleInput
                    labelText="טלפון ראשי"
                    defaultValue={formState.values.contactCellphone}
                    />

                    <FormFieldSingleInput
                    labelText='דוא"ל'
                    defaultValue={formState.values.contactEmail}
                    />
                    
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

export default PublishPrivateRealestatePartSix;