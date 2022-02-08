import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from 'react-router-dom';
import {UserContext} from '../../../contexts/User.context';

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormFieldSingleInput from "../../../components/custom/FormFieldSingleInput.component";

//Reducer Imports
import PPRSixthFormReducer, {PPR_SIXTH_FROM_INITIAL_STATE} from "../../../reducers/publishPrivateRealestate/PPRSixthForm.reducer";
import { PPRSixthFormActionTypes } from "../../../types/publishPrivateRealestateFormAction.types";
import { PPRSixthFormAction } from "../../../actions/publishPrivateRealestateForm.actions";

const PublishPrivateRealestatePartSix = ({selected,completed,returnButton,reopen,submitFunction}) => {
    
    const {user} = useContext(UserContext)
    const [formState,dispatchForm] = useReducer(PPRSixthFormReducer,PPR_SIXTH_FROM_INITIAL_STATE);
    const [showSecondaryContact,setShowSecondaryContact] = useState(false);
    const [showVirtualNumberModal,setShowVirtualNumberModal] = useState(false);
    const [showWeekendModal,setShowWeekendModal] = useState(false);

    useEffect(()=>{
        console.log(user)
        dispatchForm(PPRSixthFormAction(PPRSixthFormActionTypes.CHANGE_CONTACT_NAME_STATE,user.name));
        dispatchForm(PPRSixthFormAction(PPRSixthFormActionTypes.CHANGE_CONTACT_CELLPHONE_STATE,user.cellphone));
        dispatchForm(PPRSixthFormAction(PPRSixthFormActionTypes.CHANGE_CONTACT_EMAIL_STATE,user.email));
    },[user])

    const handleSubmit = () => {
        if(Object.values(formState.isValid).some(val=>val===false))
            dispatchForm(PPRSixthFormAction(PPRSixthFormActionTypes.CHANGE_SHOW_ERROR_STATE));
        else {
            submitFunction("CHANGE_SIXTH_FORM_VALUES",formState.values)
        }
    }

    const handleCheckboxInput = (e,actionType) => {
        const value = e.target.checked;
        dispatchForm(PPRSixthFormAction(actionType,value));
    }

    const deleteSecondaryContact = () => {
        setShowSecondaryContact(false);
    }
    
    return (
        <div className={"private-realestate__selection realestate__contact"+(completed?" completed":"")} onClick={reopen}>
            
            <div className={"private-realestate__selection__modal"+(showVirtualNumberModal?" show":"")}
            onClick={()=>setShowVirtualNumberModal(false)}>
                <div className="private-realestate__selection__modal__content">
                    <span className="private-realestate__selection__modal__content__close">&#10005;</span>
                </div>
            </div>

            <div className={"private-realestate__selection__modal"+(showWeekendModal?" show":"")}
            onClick={()=>setShowWeekendModal(false)}>
                <div className="private-realestate__selection__modal__content">
                    <span className="private-realestate__selection__modal__content__close">&#10005;</span>
                </div>
            </div>
            
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
            <div className="form-container">
                <span className="private-realestate__selection__subtitle">רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים</span>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <FormFieldSingleInput
                    labelText="שם איש קשר*"
                    defaultValue={formState.values.contactName}
                    />

                    <FormFieldSingleInput
                    labelText="טלפון ראשי"
                    defaultValue={formState.values.contactCellphone}
                    />

                    <div className={"add-new-contact"+(showSecondaryContact?" active":"")}>
                        <div className="add-new-contact__button" onClick={()=>setShowSecondaryContact(true)}>
                            <span className="add-new-contact__button__symbol">+</span>
                            <span className="add-new-contact__button__text">הוספת איש קשר נוסף</span>
                        </div>
                        <div className="add-new-contact__form">
                            <FormFieldSingleInput 
                            labelText="איש קשר נוסף"/>

                            <FormFieldSingleInput
                            labelText="טלפון נוסף"/>
                            <div className="add-new-contact__form__close" onClick={deleteSecondaryContact}>
                                <span className="add-new-contact__form__close__symbol">&#128465;</span>
                                <span className="add-new-contact__form__close__text">ביטול</span>
                            </div>
                        </div>
                    </div>

                    <div className="add-virtual">
                        <div className="form-field checkbox">
                            <input type="checkbox" className="form-field__input" checked={formState.values.contactVirtualNumber}
                            onChange={(e)=>handleCheckboxInput(e,PPRSixthFormActionTypes.CHANGE_CONTACT_VIRTUAL_CELLPHONE_STATE)}/>
                            <label className="form-field__label">אני רוצה שיופיע מספר וירטואלי במודעה שלי</label>
                            <div className="form-field__info-button" onClick={()=>setShowVirtualNumberModal(true)}>
                                <FontAwesomeIcon icon={"question-circle"}/></div>
                            <span className="form-field__description">
                                המספר הוירטואלי יינתן בחינם בכפוף למדיניות השירות ולמעט במקרים המפורטים
                                <Link to="/eula" target="_blank" rel="noopener noreferrer" className="form-field__description__link"> כאן</Link>
                            </span>
                        </div>
                        <div className={"form-field checkbox"+(formState.isDisabled.contactWeekend?" disabled":"")}>
                            <input type="checkbox" className="form-field__input" disabled={formState.isDisabled.contactWeekend}
                            checked={formState.values.contactWeekend}
                            onChange={(e)=>handleCheckboxInput(e,PPRSixthFormActionTypes.CHANGE_CONTACT_WEEKEND_STATE)}/>
                            <label className="form-field__label">אני רוצה לקבל שיחות מגולשי האתר גם בסופ"ש</label>
                            <div className="form-field__info-button" onClick={()=>setShowWeekendModal(true)}>
                                <FontAwesomeIcon icon={"question-circle"}/></div>
                        </div>
                    </div>

                    <FormFieldSingleInput
                    labelText='דוא"ל'
                    defaultValue={formState.values.contactEmail}
                    />

                    <div className="form-field checkbox graybg">
                        <input type="checkbox" checked={formState.values.contactTerms} className="form-field__input"
                        onChange={(e)=>handleCheckboxInput(e,PPRSixthFormActionTypes.CHANGE_CONTACT_TERMS_STATE)}/>
                        <label className="form-field__label">
                            קראתי ואישרתי את 
                            <Link to="/eula" target="_blank" rel="noopener noreferrer" className="form-field__label__link"> התקנון</Link>
                            *
                        </label>
                    </div>

                    <div className="form-field checkbox">
                        <input type="checkbox" className="form-field__input" checked={formState.values.contactMailingList}
                        onChange={(e)=>handleCheckboxInput(e,PPRSixthFormActionTypes.CHANGE_CONTACT_MAILING_LIST_STATE)}/>
                        <label className="form-field__label">אני רוצה שתשלחו לי עדכונים למייל</label>
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

export default PublishPrivateRealestatePartSix;