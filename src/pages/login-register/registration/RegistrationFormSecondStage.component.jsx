import React from "react";
import { registrationFormAction } from "../../../actions/registrationForm.actions";
import FormFieldSingleInput from "../../../components/custom/FormFieldSingleInput.component";
import FormSubmitButton from "../../../components/custom/FormSubmitButton.component";
import registrationSecondFormActionTypes from "../../../types/registrationSecondFormAction.types";

const RegistrationFormSecondStage = ({formState,dispatchForm,submitForm}) => {

    const handleNameInput = (e) => {
        const name = e.target.value;
        dispatchForm(registrationFormAction(registrationSecondFormActionTypes.CHANGE_NAME_STATE,name));
    }
    const handleSurnameInput = (e) => {
        const surname = e.target.value;
        dispatchForm(registrationFormAction(registrationSecondFormActionTypes.CHANGE_SURNAME_STATE,surname));
    }
    const handleCellphoneInput = (e) => {
        const cellphone = e.target.value;
        dispatchForm(registrationFormAction(registrationSecondFormActionTypes.CHANGE_CELLPHONE_STATE,cellphone));
    }
    const handleTermsInput = (e) => {
        const terms = e.target.checked;
        dispatchForm(registrationFormAction(registrationSecondFormActionTypes.CHANGE_TERMS_STATE,terms));
    }
    const handleMailingListInput = (e) => {
        const isOnMailingList = e.target.checked;
        dispatchForm(registrationFormAction(registrationSecondFormActionTypes.CHANGE_MAILING_LIST_STATE,isOnMailingList));
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.target.disabled = true;
        let isValidForm = true;
        for(let key in formState.isValid)
            if(!formState.isValid[key]) {
                isValidForm = false;
                dispatchForm(registrationFormAction(registrationSecondFormActionTypes.CHANGE_SHOW_ERROR_MESSAGES_STATE));
                break;
            }
        if(!formState.values.terms){
            isValidForm = false;
            dispatchForm(registrationFormAction(registrationSecondFormActionTypes.CHANGE_FORM_MESSAGE_STATE,{text:"???????? ???????? ???? ?????????? ????????",addClass:"error"}))
        }

        if(isValidForm){
            submitForm(e.target)
        }
        e.target.disabled = false;
    }
    return (
        <form className="register__form">
            <FormFieldSingleInput labelText={"???? ????????*"} placeHolder={"?????????? ???? ????????"} 
                                errorMessage={formState.showErrorMessages.name && formState.errorMessages.name} updateFunction={handleNameInput}/>

            <FormFieldSingleInput labelText={"???? ??????????*"} errorMessage={formState.showErrorMessages.surname && formState.errorMessages.name}
                                placeHolder={"?????????? ???? ??????????"} updateFunction={handleSurnameInput}/>

            <FormFieldSingleInput labelText={"???????? ??????????*"} placeHolder={"?????????? ???????? ??????????"} 
                                errorMessage={formState.showErrorMessages.passwordRepeat && formState.errorMessages.passwordRepeat} updateFunction={handleCellphoneInput}/>
            <div className="form-field checkbox">
                <input type="checkbox" defaultChecked onChange={handleTermsInput}/>
                <label className="form-field__label">?????????? ?????????????? ???? <span>??????????</span> ????????</label>
            </div>
            <div className="form-field checkbox">
                <input type="checkbox" onChange={handleMailingListInput}/>
                <label className="form-field__label">?????? ???????? ???????? ?????????? ???????????? ???????? ??????2</label>
            </div>
            <div className="submit-and-errors">
                {formState.formMessage.text!=="" && <div className={`register__form__form-message ${formState.formMessage.addClass}`}>
                    {formState.formMessage.text}</div>}
                <FormSubmitButton buttonText={"???????? ??????????"} buttonFunction={handleFormSubmit}/>
            </div>
        </form>
    )
}

export default RegistrationFormSecondStage;